// Handle additional dining content in "Things to Do" page
$(function () {
    // HTML template for dining options
    const additionalContent = `
        <section class="dining-options additional-content">
            <div class="dining-column">
                <h2 class="dining-title">North Shore</h2>
                <div class="dining-listings">
                    <p class="dining-item">
                        <span>Rivers Casino</span>
                        <a href="http://www.riverscasino.com" class="links">www.riverscasino.com</a>
                        <span>412-231-7777</span>
                    </p>
                    <p class="dining-item">
                        <span>Carnegie Science Center</span>
                        <a href="http://www.carnegiesciencecenter.org" class="links">www.carnegiesciencecenter.org</a>
                        <span>412-237-3400</span>
                    </p>
                    <p class="dining-item">
                        <span>Heinz Field</span>
                        <a href="http://www.heinzfield.com" class="links">www.heinzfield.com</a>
                        <span>412-323-1200</span>
                    </p>
                    <p class="dining-item">
                        <span>PNC Park</span>
                        <a href="http://www.pirates.com" class="links">www.pirates.com</a>
                        <span>412-321-2827</span>
                    </p>
                </div>
            </div>

            <div class="dining-column">
                <h2 class="dining-title">Downtown</h2>
                <div class="dining-listings">
                    <p class="dining-item">
                        <span>Point State Park</span>
                        <a href="http://www.dcnr.state.pa.us/stateparks/findapark/pointstate" class="links">www.dcnr.state.pa.us/stateparks/findapark/pointstate</a>
                    </p>
                    <p class="dining-item">
                        <span>Cultural District</span>
                        <a href="http://www.trustarts.org" class="links">www.trustarts.org</a>
                        <span>412-456-6666</span>
                    </p>
                    <p class="dining-item">
                        <span>Market Square</span>
                        <span>Shopping and Dining</span>
                    </p>
                </div>
            </div>
        </section>
    `;

    // Insert content and hide initially
    $('.more-section').before(additionalContent);
    $('.additional-content').hide();

    // Toggle content visibility on button click
    $('.more-button').click(function () {
        if ($('.additional-content').is(':hidden')) {
            $('.additional-content').show();
            $(this).text('Show less');
        } else {
            $('.additional-content').hide();
            $(this).text('Read more about fun things to do!');
        }
    });
});

// Handle image carousel functionality
$(function () {
    // Image credits array
    let credits = [
        "Photo courtesy of \"Urban Redevlopment Authority of Pittsburgh\"",
        "Photo courtesy of \"Station Square\" on Facebook",
        "Photo courtesy of \"Trip Advisor\"",
        "Photo courtesy of \"Lewis and Clark Trail Experience\""
    ];

    // Next button click handler
    $('.next-btn').click(function () {
        let current = $('.slide.active');
        let next = current.next('.slide');

        // Loop back to first slide if at end
        if (next.length === 0) {
            next = $('.slide:first');
        }

        current.removeClass('active');
        next.addClass('active');

        // Update credit text
        let nextIndex = $('.slide').index(next);
        $('.creds p').text(credits[nextIndex]);
    });

    // Previous button click handler
    $('.prev-btn').click(function () {
        let current = $('.slide.active');
        let prev = current.prev('.slide');

        // Loop to last slide if at beginning
        if (prev.length === 0) {
            prev = $('.slide:last');
        }

        current.removeClass('active');
        prev.addClass('active');

        // Update credit text
        let prevIndex = $('.slide').index(prev);
        $('.creds p').text(credits[prevIndex]);
    });
});

// Handle booking button functionality
document.addEventListener('DOMContentLoaded', function () {
    // Select all booking buttons
    const bookingButtons = document.querySelectorAll('.btn, .btn.lg');
    const bookingUrl = 'https://form.jotform.com/240705601606145';

    // Add click handlers to all booking buttons
    bookingButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            window.open(bookingUrl, '_blank');
        });
    });

});

//Form Validation for mailling list
function formValidation() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let zipcode = document.getElementById("zipcode");
    let formError = document.getElementById("formError");

    // Reset error message
    formError.innerHTML = "";
    if (!name.checkValidity() || !email.checkValidity()) {
        formError.innerHTML = "Please fill out all required fields correctly";
    }
    if (phone.value && !phone.checkValidity()) {
        formError.innerHTML = "Please enter a valid 10-digit phone number";
    }
    if (zipcode.value && !zipcode.checkValidity()) {
        formError.innerHTML = "Please enter a valid 5-digit zip code";
    }
}



