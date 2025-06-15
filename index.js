 const swiper = new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });

    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Create mailto link
      const mailtoLink = `mailto:jonelpaylande0403@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      document.getElementById('form-status').textContent = 'Your email client is opening...';
      document.getElementById('form-status').className = 'form-status success';
      
      // Optional: Reset form after delay
      setTimeout(() => {
        this.reset();
        document.getElementById('form-status').textContent = '';
        document.getElementById('form-status').className = 'form-status';
      }, 3000);
    });