// Option 1:
// Define a function in the various status index files (admin, premium, user, basic) which Opens a modal,
// The function should take in teh current item in the returned status array while mapping through.
// as you print the singleStatusItem component bind the function you have defined above to it's onpress even handler
// or simply bind it to that of the parent which would propagate it to each individual singlestatusitem
/*

IN THE LOOP:
<singleStatusItem data={item}
*/
//Displays a single status in detail in a modal (shows the image in large full screen size and activates a
// carousel and renders the images in it).

// You also use a proper screen for it ( i.e this component)
//This should be in a stack navigation; hence users can press on a status listed on the statusindex
// and they will be naviagted to the details screen showing a bigger picture of the status.
