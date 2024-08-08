import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Nav from './Layouts/Nav';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page= pages[`./Pages/${name}.jsx`]
    page.default.layout =  page.default.layout || (( page)=><Nav children={page} />)
   return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },

  
    progress: {
      // The delay after which the progress bar will appear, in milliseconds...
      delay: 250,
  
      // The color of the progress bar...
      color: 'lightgreen',
  
      // Whether to include the default NProgress styles...
      includeCSS: true,
  
      // Whether the NProgress spinner will be shown...
      showSpinner: false,
    },
    // ...

})