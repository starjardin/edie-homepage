const navTemplate = document.querySelector(".template");
const headerNav = document.querySelector(".header__navigation")
const footer = document.querySelector(".footer");
const footerNav = footer.querySelector(".footer__navigation");
const footerFormContact = footer.querySelector('.footer__form-contact')
const headerNavContent = document.importNode(navTemplate.content, true)
const footerNavContent = document.importNode(navTemplate.content, true)
const formContactTemplate = document.querySelector(".form-template")
const purposeForm = document.querySelector('.purpose__container')

footerNav.appendChild(headerNavContent);
headerNav.appendChild(footerNavContent);
footerFormContact.appendChild(document.importNode(formContactTemplate.content, true))
purposeForm.appendChild(document.importNode(formContactTemplate.content, true))