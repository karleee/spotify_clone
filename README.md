# Fikafy

## Introduction
Fikafy is a single page music streaming app that is meant to mirror the style and user interface of 'Spotify'. Using a simple and clean interface, it delivers continuous song playing capability along with extra features embedded in the audio player; some of which include track shuffling, repeating, and automatic queuing. 

ˆ

## How It Works
To see the most up to date version, please visit [the homepage](https://karleee-spotify.herokuapp.com/#/welcome).

## Technologies Used
* To provide sign up, log in, and log out capabilities, I used Ruby on the backend to create the core logic for user authentication. Page redirection upon sign up, log in, and log out was established by using custom built protected and authenticated routes. 

* All frontend rendering was accomplished by using JavaScript to manipulate different components to be switched out on the page, according to its specific route, as well as extensive use of the React and Redux libraries.

* To host all album and artist photos, I used Amazon S3 cloud services to avoid storing large amounts of data on my application.

## Feature Spotlight

### Dynamic Play

The dynamic play feature allows the user to start a playlist from various places on the website. The first access point appears when the user lands on the home page and positions their mouse over the playlist thumbnails on their dashboard. 

As the mouse hovers over the thumbnail, an option to play the playlist appears in the form of a green and white icon. If the user clicks anywhere other than the play button, they are redirected to the playlist's page; however, if they click on the play icon, then they remain on the current page and the playlist will begin playing in the audio player.

Across the website, there are multiple access points like the one mentioned above: the playlist thumbnails that appear on the user's page and the playlist photo on the playlist page itself.

**Challenges**

* Displaying multiple visual hover effects on the user interface on elements that were already being hovered over
* Creating the functionality of dual on click actions for one HTML element
* Wiring the audio to begin playing the chosen playlist when the user clicks on a play button from outside of the playlist page

**Solutions**
> Hover Effects

To create the waterfall effect of having multiple elements with additional visual cues upon hover required an extremely organized and simplified structure of the stylesheets. By narrowing down the stylesheets to a page structure rather than a component structure made keeping track of elements much more concise; this way, components that have another child component embedded in them are contained in one stylesheet rather than being spread out across multiple stylesheets. 

Choosing to give outer element wrappers unique class names and more more uniform names for children elements also made the styling much quicker and easier to recognize.  

> Dual Click Actions

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


------

### Flexible Searching

The search query that the user chooses to enter in the search page of the application is flexible enough to be used with different datatypes that have unique styling decisions: artists, playlists, and songs. Not only is the user able to choose any one of those datatypes to search for, but the styling is also changed depending on what their query was. 

**Challenges**

* Extracting a complete set of search query results from the store despite a difference in datatype structure
* Extracting uniform attributes from a search result to correctly display the top result
* Extracting the correct album artwork for each track displayed in the search result

**Solutions**




