# Watermarker.js - Simple jQuery Plugin by Alfian Chandra

## Description
The jQuery Watermarker plugin allows users to add a watermark to the selected image through a file input element. With this plugin, users can customize the position, size, and transparency of the watermark according to their preferences. This plugin provides a practical solution for dynamically adding watermarks to images on a web page.

## Installation
To use the Watermarker plugin, make sure you have included jQuery in your web page. Then, follow these steps:

1. Download the jQuery Watermarker.js file from the GitHub repository or other sources.
2. Include the Watermarker.js file in your project, and be sure to reference it after the jQuery file.
   ```html
   <script src="jquery.min.js"></script>
   <script src="Watermarker.js"></script>
   ```
3. Now, the Watermarker plugin is ready to be used in your project.

## Usage
After including the plugin in your web page, you can use it by selecting the file input element where the image will be selected. Here's an example of usage:

1. HTML:
   ```html
   <input type="file" id="imageInput">
   ```

2. JavaScript:
   ```javascript
   $(document).ready(function() {
    $("#imageInput").watermarkImage("path/to/watermark.png", function(finalImage) {
        // Do something with finalImage, such as displaying it in a preview or sending it to the server.
        console.log("Final image URL:", finalImage);
    }, {
        jarak: 50,        // Spacing between watermarks (default: 50)
        wmSizeX: 160,     // Width of the watermark (default: 160)
        wmSizeY: 50,      // Height of the watermark (default: 50)
        wmTrans: 0.5      // Transparency of the watermark (default: 0.5)
    });
   });
   ```

## Configuration Options
The Watermarker plugin has customizable configuration options to adjust the behavior of the watermark. Here are the available options:

- `jarak` (default: 50): Distance between watermarks in pixels.
- `wmSizeX` (default: 160): Width of the watermark in pixels.
- `wmSizeY` (default: 50): Height of the watermark in pixels.
- `wmTrans` (default: 0.5): Transparency of the watermark, with a value between 0 (transparent) and 1 (opaque).

## Conclusion
The jQuery watermarkImage plugin provides useful functionality for adding a watermark to the selected image. With customizable configuration options and available custom events, this plugin offers a practical and user-friendly solution for adding watermarks to images dynamically on a web page.

