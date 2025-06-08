# React Router
project reference : [07_reactRouter](../07_reactRouter/):
## What is Link?
- A component to create navigation links without reloading the page.
- Works like an `<a>` tag but with client-side routing.
- Usage: `<Link to="/path">Go to Path</Link>`

## What is NavLink?
- Extends `Link` with active styling capabilities.
- Automatically applies an active class or style when the route matches.
- Useful for navigation menus to highlight the active page.
- Usage example (React Router v6):
  ```jsx
  <NavLink 
    to="/home" 
    className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}>
    Home
  </NavLink>

## Why use Link and NavLink?
- Enables SPA navigation without full page reloads.

- Keeps browser history intact.

- Allows dynamic styling of active navigation links with `NavLink`.

## How we used them in the project:
- Used `Link` for basic navigation buttons or links.

- Used `NavLink` in header/menu to highlight current page link.

- Styled active links using Tailwind CSS classes via `NavLink`'s `className` function.