##Dom Changed Detector##

It is a simple, lightweight class that can be used to keep track the changed elements on the page. 

###Getting Started###
Copy the datachangedtracker.js file into your project. 
####Steps####
- The items that will be kept track should be under the same class and their id should be determined.
- when you want to keep track of the items, simply call the DataChangedTracker.initialize(x,y) method. First parameter: Class name, Second parameter: listener function.

The listener function is called with a boolean parameter. True means change has occurred. False means Items turn back to initial state.

####Caution####
After you call the DataChangedTracker.initialize(x,y), if you want to add another behavior, call addEventListener("onChange",).