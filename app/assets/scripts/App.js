import '../styles/styles.css'
import MobileMenu from './modules/mobilemenu'
import StickyHeader from './modules/stickyheader'
let stickyheader = new StickyHeader();
new MobileMenu();
if (module.hot) {
  module.hot.accept()
}
// alert("hellow sawan this is webpack test and u did it succesfully");