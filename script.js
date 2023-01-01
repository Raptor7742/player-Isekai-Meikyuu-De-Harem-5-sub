const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Isekai Meikyuu De Harem - épisode 5 VOSTFR",
      description: "Vous regardez",
      image: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/03/isekaimeikyuudeharemwo_keyvisual-1-e1648179739159.jpg?resize=696%2C391&ssl=1",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m204.syncusercontent.com/mfs-60:af2b0fd082e28a94fc6f529e7ae8e6ec=============================/p/Isekai.Meikyuu.De.Harem.Wo.S01e05.Unrated.Vostfr.1080P.Hdtv.X265.mp4?allowdd=0&datakey=G95NrcuoAMci9Jsm84YcU0C7dHVlxk4tXQgaaULHzc+nsU8pJyXw6eD+39FZkatIXym6i8rEm59KxiUVQRoJUmMfhEw6bJnrq1TXUErv19Uz076tR7O/XI7gDe0DCr1R1tYgCFiOqWYG4GqRiljyKndJ78QowwGjk46lO9sVOGbDZULPVuZlVijn44i5IsYB1gxG+w34Pyp8GMhIVAhdwBXe5tPy4IdnjjnsnvzyBuDu8rOMAPatiba/0B8cMgaryyTHQzMLEsUiEvTc6kq4wscZ4PAN+2vtZmrPmFa2hMUbjQEB+Tzt0qyTcAxK9ryxk0PXPKsEF/OVuXEGc6Likg&engine=ln-2.3.7.3&errurl=cz8EAE2UvuGa1XhewMiz66Y2CSMug6EUYpEH/Hn7Zf0ADqwF4/DK2BKLxyiC99WrPoEyKGyC2XUKAVXTgwCz1qjjnBa/5yqtRmR4F+a+wqDZaUm9cjIiI+Gl64RlBg/WmC7gfa33btmVUe+7iHFg6mN7HH3EqeDRHMxbdfUU2jlNMVmESc11l9J2Ty7LbYWKzNqIwFQxvGQ99ImEXqFb2xjAsftgpLusu0ZIG8kCl1lErBxTxyNeFZ7x2W319pC8sfRVGMfJX8tOy929jZBk3KkPkHlvWu3DZjtz/MavJ9uEwvAWobPX4+1xsqylJFtHzUTr5y7g8H/1sHlbFpplng==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iSXNla2FpLk1laWt5dXUuRGUuSGFyZW0uV28uUzAxZTA1LlVucmF0ZWQuVm9zdGZyLjEwODBQLkhkdHYuWDI2NS5tcDQiO2ZpbGVuYW1lKj1VVEYtOCcnSXNla2FpLk1laWt5dXUuRGUuSGFyZW0uV28uUzAxZTA1LlVucmF0ZWQuVm9zdGZyLjEwODBQLkhkdHYuWDI2NS5tcDQ7&ipaddress=1458994159&linkcachekey=bb1182bd0&linkoid=1747010004&mode=101&sharelink_id=11804807750004&timestamp=1672597424007&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=0d5863f4477ee85941bd85c3f9fe2b7f55312c8c&cachekey=60:af2b0fd082e28a94fc6f529e7ae8e6ec=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
