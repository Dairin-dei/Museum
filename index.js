import * as galleryFn from "./js/gallery.js";
import * as videoFn from "./js/video.js";
import * as bookingFn from "./js/booking.js";
import * as miscFn from "./js/misc.js";
import * as burgerFn from "./js/burger.js";
import * as welcomeFn from "./js/welcome-slider.js";
import * as exploreFn from "./js/explore-slider.js";
import * as ticketsFn from "./js/tickets.js";
import * as mapFn from "./js/map.js";

galleryFn.loadImages();
galleryFn.mainFloatingImages();
galleryFn.showOnLoad();
//galleryFn.manageImages();

videoFn.functionsOnLoad();
videoFn.managingVideo();
videoFn.ManagingFrames();

bookingFn.addEventListenersAll();
bookingFn.managingBooking();

ticketsFn.managingTickets();

miscFn.changingImages();
miscFn.consolelog();

burgerFn.addEventListenersAll();

welcomeFn.controlSlider();
exploreFn.exploreSlider();

mapFn.managingMap();
