<script>
  function generatePost() {
    const videoId = document.getElementById("videoId").value;
    const productLink = document.getElementById("productLink").value;
    const review = document.getElementById("review").value;

    fetch(`https://www.tiktok.com/oembed?url=https://www.tiktok.com/@tiktok/video/${videoId}`)
      .then(response => response.json())
      .then(data => {
        const videoContainer = document.createElement("div");
        videoContainer.classList.add("video-container");
        videoContainer.innerHTML = data.html;

        const productImage = document.createElement("img");
        productImage.classList.add("product-image");
        productImage.src = `https://images-na.ssl-images-amazon.com/images/I/${productLink}.jpg`;

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        productInfo.innerHTML = `
          <div class="product-title">Product Title</div>
          <a href="${productLink}" target="_blank">Link to Amazon</a>
        `;

        const post = document.createElement("div");
        post.classList.add("post");
        post.appendChild(videoContainer);
        post.appendChild(productImage);
        post.appendChild(productInfo);

        const reviewElement = document.createElement("div");
        reviewElement.innerHTML = `<p>${review}</p>`;
        post.appendChild(reviewElement);

        const postsContainer = document.getElementById("posts");
        postsContainer.appendChild(post);
      });
  }
</script>
