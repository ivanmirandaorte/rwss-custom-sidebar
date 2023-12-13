const sidebarOpen = document.getElementById('sidebar-open'); 
const sidebarClose = document.getElementById('sidebar-close')
const sidebarBody = document.getElementById('sidebar-body'); 

function sidebarToggle () {
    // if the sidebar body is hidden, 
    if(sidebarBody.classList.contains('sidebar-collapsed')) {
        console.log('open sidebar');
        // add expanded class 
        sidebarBody.classList.add('sidebar-expanded'); 
        // remove the hidden styling 
        sidebarBody.classList.remove('sidebar-collapsed');
        // hide the sidebar open icon 
        sidebarOpen.classList.add('hidden-btn'); 
        // show the sidebar close icon 
        sidebarClose.classList.remove('hidden-btn');
    } else {
        // hide the sidebar body 
        sidebarBody.classList.add('sidebar-collapsed');
        // remove expanded 
        sidebarBody.classList.remove('sidebar-expanded');
        // hide the sidebar close icon 
        sidebarClose.classList.add('hidden-btn');
        // show the sidebar open icon 
        sidebarOpen.classList.remove('hidden-btn');
        console.log('collapse sidebar')
    }
};
