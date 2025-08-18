<div align="center"><img width="70px" src="https://obsproject.com/forum/attachments/icon-png.87900/" /><br><a href="https://obsproject.com/forum/resources/g4balltracker-a-custom-dock-for-obs-pool-streamers.1622/download">Download Here</a><br>This is a companion product for the <a href="https://obsproject.com/forum/resources/g4scoreboard-a-pool-billiards-score-board.1586/">g4ScoreBoard</a>.<br>But can also be used as a stand alone package.</div>

***

**USE:**<br>
* Choose which game `eight` `nine` or `ten` from the list and select overlay size.
* Click on balls in dock to remove them from overlay when balls are pocketed.
* ```Hide``` / ```Show``` Button will hide and display the ball tracker list.
* ```Reset``` button will reset ball icons in stream and dock.<br><br>

**NOTES:**<br><br>
If [g4ScoreBoard](https://obsproject.com/forum/resources/g4scoreboard-a-pool-billiards-score-board.1586/) is installed: 
* [g4BallTracker](https://github.com/ngholson/g4BallTracker) will auto reset when a players score is increased, or the reset button is clicked from the g4ScoreBoard control panel.
* Hiding the g4ScoreBoard with the opacity slider will hide the tracker as well. 
* If Hide is enabled on the [g4BallTracker](https://github.com/ngholson/g4BallTracker) all reset and hide/show commands from the g4ScoreBoard will be ignored.<br><br>

***

#### **SETUP:**<br>
* Open ```config.js``` in any text editor and change to suit your preferences <i>(see below)</i>.
* Add a new ```Custom Browser Dock``` in OBS, point this to the ```control-panel.html``` file in this download.
* Add a new ```Browser``` source to your scene. change the URL the the path of ```browser-source.html```.<br><br>

**CONFIG.js:**<BR>
* `ballColor` - Sets the ball type.
  * `standard` Standard ball colors
  * `white` TV Colors with white stripes
  * `black` TV Colors with black stripes
  * `AI_render` AI Rendered normal ball set
  * `render0` ball set created by Ian MacLoed <br><br>
* `position` - horizontal or vertical alignment of g4BallTracker
  * `horizontal` 
  * `vertical`<br><br>
* `leftRight` - Only applies if the `position` setting is set to `vertical`
  * `left` Aligns Left
  * `right` Aligns Right<br><br>
* `staticImages` - Defines ball behavior in the tracker. 
  * `true` Ball positions are static, when a ball is removed a blank space remains where the ball was. 
  * `false` Ball positions are dynamic, when a ball is removed the remaining balls move together filling any blank spaces.<br><br>

***

#### **SCREENSHOTS:**<br>
<img src="https://obsproject.com/forum/attachments/tv_colors-png.87902/"><br><br>
<img src="https://obsproject.com/forum/attachments/standard_colors-png.87901/">
 
