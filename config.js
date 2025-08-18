// Ball color setting
// "black" = TV Tournament ball colors with black stripe
// "white" = TV Tournament ball colors with white stripe
// "standard" = Standard ball colors
//
// you can make your own, 
// create a new folder inside the images folder
// name your images numbered 1-15 in .PNG format
// and change this to the new folder name. 
var ballColor = "black";	// "black", "white", "standard", "AI_Render", "render0" 


// below here is still experimental, results may vary. 
// changes ball alignment on stream output
var position = "horizontal";		// options are "vertical" or "horizontal"
var leftRight = "left";				// left or right (applies to vertical position)
var staticImages = true;            // true = ball images are staticly positioned. false = dynamic ball position (no spaces between balls when a ball is removed)
                                        // static example:  (1)(2)      (5)(6)  (8)(9) 
                                        // dynamic example: (1)(2)(5)(6)(8)(9)

