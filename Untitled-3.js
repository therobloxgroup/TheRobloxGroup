  <!-- JavaScript -->
  <script>
    const translations = {
      id: {
        mainTitle: "Selamat Datang di Website The Roblox Group Indonesia",
        social1: "Sosmed Pertama Kami",
        social2: "Sosmed Kedua Kami",
        group: "Grup Kami",
        videoTitle: "Video-Video Kami",
        footerText: "© 2025 dibuat oleh programmer The Roblox Group Indonesia. All rights reserved.",
        adminIntro1: "perkenalkan nama nama admin the roblox",
        admin1: "admin pertama yaitu Rif dia adalah admin sekaligus ketua the roblox dia membuat the roblox",
        admin2: "admin kedua yaitu raifa dia adalah menemani awal proses the roblox dibangun",
        admin3: "admin ketiga the roblox adalah nakila",
        admin4: "admin keempat admin terakhir yang ada di the roblox yaitu namanya adalah racka"
      },
      en: {
        mainTitle: "Welcome to The Roblox Group Indonesia Website",
        social1: "Our First Social Media",
        social2: "Our Second Social Media",
        group: "Our Group",
        videoTitle: "Our Videos",
        footerText: "© 2025 created by The Roblox Group Indonesia programmers. All rights reserved.",
        adminIntro1: "Introducing the admins of The Roblox",
        admin1: "The first admin is Rif, the leader and founder of The Roblox.",
        admin2: "The second admin Raifa,he accompanied the initiak process of building Roblox",
        admin3: "The third admin of The Roblox is Nakila.",
        admin4: "The fourth and final admin of The Roblox is Racka."
      }
    };

    function changeLanguage() {
      const lang = document.getElementById("languageSelect").value;
      const texts = translations[lang];

      for (const key in texts) {
        const elById = document.getElementById(key);
        const elByDataKey = document.querySelector(`[data-key="${key}"]`);
        if (elById) elById.textContent = texts[key];
        if (elByDataKey) elByDataKey.textContent = texts[key];
      }
    }

    function toggleTheme() {
      document.body.classList.toggle("dark-mode");
    }

    // Auto set ke English saat pertama kali load
    window.onload = () => {
      document.getElementById("languageSelect").value = "en";
      changeLanguage();
    };
  </script>