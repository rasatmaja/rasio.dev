/*
  Using the IntersectionObserver
  Observers are objects that spots something in real-time.
  And there are different observers, which spots different things, 
  like the MutationObserver, where you can look for changes in the DOM, 
  for example. And we need in this case the IntersectionObserver.
*/
const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        /*
        Looping through all entries, which are observed.
      */
        entries.forEach((entry) => {
        /*
          With this condition, we check whether the element is in the current viewport, 
          respectively if the entry intersects with the viewport.
          If true, then we add the enter class and call the unobserve function.
          Because we don’t have to observe it anymore.
        */
            if (entry.isIntersecting) {
                entry.target.classList.add('enter');
                //animatedScrollObserver.unobserve(entry.target);
            } else {
                entry.target.classList.remove('enter');
            }
        });
    }
);

const hideSidebarScrollObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sidebar = document.getElementById('contact-sidebar');
                if (sidebar != null){
                    sidebar.classList.add('hidden');
                }
            } else {
               
                const sidebar = document.getElementById('contact-sidebar');
                if (sidebar != null) {
                    sidebar.classList.remove('hidden');
                }
            }
        });
    }
);
  
/*
    The object for our vue directive.
    Vue.js provides several hook functions you can use for a directive.
    We need only one of them, the bind function, 
    which is called only once when the directive is bound to the element. 
    This is where you can do some setup work, for example.
    In this case we add a new CSS class to the element and observe it.
  */
export default {
    bind (el, binding, vnode) {
        if (binding.arg === 'animation'){
            el.classList.add('before-enter');
            animatedScrollObserver.observe(el);
        } else if (binding.arg === 'hideSidebar'){
            hideSidebarScrollObserver.observe(el);
        }
    }
};