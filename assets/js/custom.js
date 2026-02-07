/**
 * Custom JavaScript for Seeds Exporter Website
 */

// Request Form Submission Handler - DISABLED
// This was interfering with FormSubmit. The form now submits directly to FormSubmit.
/*
$(function () {
    $('.request__form').on('submit', function (e) {
        e.preventDefault();
        var form = $(this);
        var tab = form.closest('.tab-pane').attr('id') === 'carrying-tab-pane' ? 'Carrying' : 'Done';
        var msgDiv = form.find('.request-response');
        msgDiv.hide().removeClass('alert-success alert-danger');

        var formData = new FormData(this);
        formData.append('form_type', tab);

        $.ajax({
            url: 'https://seedsexporter.in/home/request_form',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            dataType: 'json',
            success: function (response) {
                if (response.status === 'success') {
                    msgDiv.addClass('alert alert-success').html(response.message).fadeIn();
                    form[0].reset();
                } else {
                    msgDiv.addClass('alert alert-danger').html(response.message).fadeIn();
                }
            },
            error: function () {
                msgDiv.addClass('alert alert-danger').html('An error occurred. Please try again later.').fadeIn();
            }
        });
    });
});
*/

// Enhanced touch support for mobile devices
document.addEventListener('DOMContentLoaded', function () {
    // Ensure proper viewport sizing
    function adjustViewport() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    adjustViewport();
    window.addEventListener('resize', adjustViewport);
});

// Smooth Scroll Script for Single Page Navigation
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#" or empty
            if (href === '#' || href === '') {
                return;
            }

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Get header height for offset
                const header = document.querySelector('.tgmenu__navbar') || document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 80;

                // Calculate position with offset
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active state in navigation
                document.querySelectorAll('.navigation li').forEach(li => {
                    li.classList.remove('active');
                });

                const parentLi = this.closest('li');
                if (parentLi) {
                    parentLi.classList.add('active');
                }
            }
        });
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section[id], div[id="contact"]');
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.navigation li').forEach(li => {
                    li.classList.remove('active');
                    const link = li.querySelector('a[href="#' + sectionId + '"]');
                    if (link) {
                        li.classList.add('active');
                    }
                });
            }
        });
    });
});
