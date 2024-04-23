(function($){
	$.fn.watermarkImage = function (waterMarkImagePath,onResultCallback,options) {

		let defaults = {
			jarak:50,
			wmSizeX:160,
			wmSizeY:50,
			wmTrans:0.5,
		}

		const settings = $.extend({},defaults,options);

		var cCanvas = $("<canvas>", {
			id: "wmCanvas",
			style: "display: none;",
			width:100,
			height:100,
		});
		cCanvas.appendTo("body");
		let jCanvas = $("#wmCanvas");
		var canvas = jCanvas[0];

		let ctx = canvas.getContext("2d");
		let imageInput = $(this);
		let finalImage = null;
		imageInput.change(function () {
			processImage();
		});

		function processImage()
		{
			let img = new Image();
			let file = imageInput.prop('files')[0];
			let reader = new FileReader();

			reader.onload = function (e) {
				img.onload = function () {
					ctx.drawImage(img,0,0);
					document.dispatchEvent(new CustomEvent("onImageLoaded"));
				}
				img.src = e.target.result;
			}
			reader.readAsDataURL(file);

			document.addEventListener("onImageLoaded",function () {
				var width = img.naturalWidth;
				var height = img.naturalHeight;
				jCanvas.attr("width",width);
				jCanvas.attr("height",height);
				ctx.drawImage(img,0,0);
				addWatermarkPattern();
			})
		}

		function addWatermarkPattern() {
			var img2 = new Image();
			img2.onload = function() {
				var watermarkWidth = settings.wmSizeX;
				var watermarkHeight = settings.wmSizeY;

				var horizontalRepeat = Math.ceil(canvas.width / watermarkWidth);
				var verticalRepeat = Math.ceil(canvas.height / watermarkHeight);

				let offset = settings.jarak;
				ctx.globalAlpha = settings.wmTrans;

				for (var i = 0; i < horizontalRepeat; i++) {
					for (var j = 0; j < verticalRepeat; j++) {
						var xPosition = i * (watermarkWidth + offset);
						var yPosition = j * (watermarkHeight + offset);

						ctx.save();
						ctx.translate(xPosition, yPosition);
						ctx.rotate(Math.PI / 4);
						ctx.drawImage(img2, 0, 0, settings.wmSizeX, settings.wmSizeY);
						ctx.restore();
					}
				}

				finalImage = canvas.toDataURL('image/jpg');
				jCanvas.remove();
				onResultCallback(finalImage);
			};
			img2.src = waterMarkImagePath; // Ganti dengan path gambar watermark
		}
		return this;
	}
})(jQuery);
