# Fikafy

## Introduction
Fikafy is a single page music streaming app that is meant to mirror the style and user interface of 'Spotify'. Using a simple and clean interface, it delivers continuous song playing capability along with extra features embedded in the audio player; some of which include track shuffling, repeating, and automatic queuing. 

<kbd>
<img src="https://github.com/karleee/morsel/blob/master/README_images/morsel_main1.png" alt="Homepage" width="900px"     border="1">
</kbd>

<br>
<br>
<br>

<kbd>
<img src="https://github.com/karleee/morsel/blob/master/README_images/morsel_main2.png" alt="Homepage" width="900px" border="1">
</kbd>

## How It Works
To see the most up to date version, please visit [the homepage](https://karleee-spotify.herokuapp.com/#/welcome).

## Technologies Used
* Object Storage – Amazon AWS
* Querying – Ajax, jQuery
* Libraries – React, Redux
* Languages – Ruby, Javascript
* Server Environment – Ruby on Rails
* Hosting – Heroku

## Feature Spotlight
### Dynamic Play

The dynamic play feature allows the user to start a playlist from various places on the website. The first access point appears when the user lands on the home page and positions their mouse over the playlist thumbnails on their dashboard. 

As the mouse hovers over the thumbnail, an option to play the playlist appears in the form of a green and white icon. If the user clicks anywhere other than the play button, they are redirected to the playlist's page; however, if they click on the play icon, then they remain on the current page and the playlist will begin playing in the audio player.

Across the website, there are multiple access points like the one mentioned above: the playlist thumbnails that appear on the user's page and the playlist photo on the playlist page itself.

<kbd>
<img src="https://github.com/karleee/morsel/blob/master/README_images/morsel_restaurant1.png" alt="Homepage" width="900px" border="1">
</kbd>

<br>
<br>

**Challenges**
> Multiple Hover Effects

One challenge was implementing a way to layer hover effects onto elements of the user interface when they were already being interacted with or hovered over.

<br>

> Dual Clicking

Another challenge was designing a way to add dual clicking functionality for a single HTML element; specifically, clicking on one area of a thumbnail image should lead the user to a playlist page, whereas clicking on another area of the same element should trigger the audio player with the selected playlist **without** taking the user to a new page.

<br>

> Dynamic Audio Playing

One main feature of the official Spotify website seemed to be dynamic audio playing, dynamic in the sense that audio could be played from **multiple** places on the website. In other words, the user is not forced to navigate all the way to a playlist or artist's page to start listening to music, instead, they are able to play it from thumbnail images and search results.

<br>
<br>

**Solutions**
> Multiple Hover Effects: Solution

To create the waterfall effect of having multiple elements with additional visual cues upon hover required an extremely organized and simplified structure of the stylesheets. By narrowing down the stylesheets to a page structure rather than a component structure made keeping track of elements much more concise; this way, components that have another child component embedded in them are contained in one stylesheet rather than being spread out across multiple stylesheets. 

Choosing to give outer element wrappers unique class names and more more uniform names for children elements also made the styling much quicker and easier to recognize. 

<br>

> Dual Clicking: Solution

Creating multiple routing responses upon clicking different areas of a single HTML element was a tricky problem, but with the help of the history prop (accessed through the React Router), it became a much simpler task. To create this effect of multiple click possibilities, I created a handler to take the user to the new page __only__ if they had chosen a HTML element with a specific class name:

``` javascript
handleClick(e) {
  if (e.target.classList.contains("circle")) this.props.history.push(`/home`);
}
```

``` html
<div className="playlist-thumbnail-wrapper" onClick={this.handleClick}> 
  <div className="thumbnail">
    <Link to={`/playlist/${playlist.id}`}>
      <img src={playlist.photo_url} alt="Playlist thumbnail" />
      <p>{playlist.title}</p>
      <p>By {playlist.user}</p> 
    </Link>
  </div>

  <div className="play-button">
    <div className="triangle right" onClick={this.play}></div> 
      <div className="circle"></div>
    </div>
  </div>
```

Pictured below, are the individual HTML elements highlighted for clarity. As you can see, by binding the `handleClick` function to the entire clickable thumbnail area, the normal linking behavior that takes the user to the playlist's page will only occur if they __do not__ click on the play button, which is encompassed by the HTML element with a class name of `circle`.

<br>

> Dynamic Audo Playing: Solution

add text here

------

### Flexible Searching

The search query that the user chooses to enter in the search page of the application is flexible enough to be used with different datatypes that have unique styling decisions: artists, playlists, and songs. Not only is the user able to choose any one of those datatypes to search for, but the styling is also changed depending on what their query was. 

<kbd>
<img src="https://github.com/karleee/morsel/blob/master/README_images/morsel_gallery1.png" alt="Homepage" width="900px" border="1">
</kbd>

<br>
<br>

**Challenges**
> Datatype Structure

Artists, playlists, and tracks have similar data structures in the tables, however, there are still some key differences that make searching by one specific value difficult. For example, playlists and tracks both have a title attribute, but artists do not.

<br>

> Varying Attributes

Similar to the issue with the different types of attributes that a artist, playlist, and track contains, displaying the search results requires certain pieces of data to be returned from each of these objects. Creating a clean and uniform way to retrieve this information required a deep level of organization and variable tracking.

<br>

> Album Artwork Display

Although the track display in the search results resembles the current track indicator that is embedded into the audio very closely, re-using the same component proved to be difficult. Because the component that renders the audio information in the audio player uses the current song to display the appropriate album artwork and song information, using its container component in the case of a search result would prove to have problems if the user did not choose to directly play a track from the query results.

**Solutions**
> Datatype Structure: Solution

To remedy the differences in my database tables for the artists, playlists, and tracks, I chose to begin with a `values` array of all possible matching objects in the container component. Once I had all the possibilities, I applied another filter from inside of another function in the presentational component.

Rather than checking just the `title` or `name` of an object, running through a pre selected group of relevant attributes from the object ensures that a track by the artist is also included in the results; because a track has both a `title` and `artist` attribute, checking only the title first does not ensure that the track will be included in the matched results (i.e. the track title does not have the artist's name __but__ the artist's name does match the search query).

``` javascript
this.props.values.forEach(value => {
  let sub;
  let attr = [];

  if (value.title) attr.push(value.title);
  if (value.name) attr.push(value.name);
  if (value.artist) attr.push(value.artist);


  attr.forEach(attr => {
    if (attr && input.length >= 2) {
      sub = attr.slice(0, input.length);
    }

    if (input.length >= 2 && sub.toLowerCase() === input.toLowerCase()) {
      matches.push(value);
    }
  });
});
  ```
  
<br>

> Varying Attributes: Solution

Because playlists, tracks, and artists vary slightly in how the photo url is retrieved, as well as whether or not one contains a user or an artist creator type, it was important to establish common variables that could be used in a basic HTML template. To accomplish this, I established an if and else if branch that prioritized which slice of the data from the resulting search to be rendered. Depending on which branch the first (the closest) match fell into, the necessary variables were extracted and saved into local variables to be used in the HTML rendering.

``` javascript
if (this.props.artists.length > 0) {
  result = this.props.artists[0];
  creator = result.name;
  photoUrl = result.photo_url;
  link = `artist/${result.id}`;
} else if (this.props.albums.length > 0) {
  result = this.props.albums[0];
  creator = result.artist;
  photoUrl = result.photo_url;
  link = `album/${result.id}`;
  ```

<br>

> Album Artwork Display: Solution

Although the track display in the search results resembles the current track indicator that is embedded into the audio very closely, re-using the same component proved to be difficult. Because the component that renders the audio information in the audio player uses the current song that is playing to display the appropriate album artwork and song information, using its container component in the case of a search result would prove to have problems if the user did not choose to directly play a track from the query results.

To remedy this problem, I chose to render the relevant HTML elements directly in the search result index item presentational component; although, I would like to find a more DRY way to accomplish this in the future.


## Future Updates


| Version Number        | Updates           | 
| :------------- |:------------- |
| Version 1.1      | Audio player patches, Playlist CRUD capabilities, Third Pary Rerouting |
| Version 1.2      | Expanded database of audio      |   
| Version 1.3 | Additional UI effects      |  
