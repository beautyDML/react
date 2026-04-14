

//1. The "LEGO" Rule (Decomposition)
// start seeing the page into small small "blocks."
// Break it down: If a piece of UI is used more than once (like a button) or is complex (like a navbar), it must be its own component.
// Single Responsibility: A component should do one thing. If it handles the header, the sidebar, and the footer, it’s too big. Split it.

//2.The "Family Tree" Rule (Hierarchy)
// Organize your components into a Parent-Child structure.
// Parent: The container that holds the layout.
// Child: The small pieces inside (inputs, items, buttons).
// Data Flow: Information flows down(Parent → Child) like water in a waterfall.



//3. The "State vs. Props" Filter
// When you look at data, ask:
// Is it a Prop? It’s like a gift. It comes from the Parent. It is read-only.
// Is it State? It’s like a thought. It lives inside the component and changes when the user types or clicks.


// Summary Table for Quick Reference

// Componentize-Reusability-Write once, use everywhere. 
// Nesting-Organization-Keeps your code clean and manageable. 
// Lifting State-Coordination-If two children need the same data, move it to their shared Parent. |


//there are some trick to divide the component:
//1.if  a coponent is big enough to have its own css then it deserve its own folder...like
//component/Button/button.jsx
//component/Button/button.css


//2. common vs page seceret
//-divide the component into two main categories
//...1.component(the Lego page): small reusable component that don't belong to specific page
//(button , icon,image etc)

//...2.pages: they represent the whole screen(like home.jsx,dashboard.jsx)


//trick: to avoid messy import we can use index.js inside folder and import everything in this
