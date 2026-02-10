# Adding Your Profile Image

## Quick Setup

1. Save your profile photo as `profile.jpg`
2. Move it to: `public/images/profile.jpg`

## Requirements

- Format: JPG
- Dimensions: Square (1:1 ratio)
- Recommended size: 400x400 pixels or larger
- File name: Must be exactly `profile.jpg`

## From the Command Line

If you have your profile photo ready, you can copy it:

```bash
# If your photo is elsewhere, copy it:
cp /path/to/your/photo.jpg public/images/profile.jpg

# Or if you need to resize/convert it first (requires ImageMagick):
convert your-photo.jpg -resize 400x400^ -gravity center -extent 400x400 public/images/profile.jpg
```

## Crop to Square (Online Tools)

If your photo isn't square yet, use one of these free tools:

1. [Crop.cc](https://crop.cc/) - Simple online cropper
2. [iloveimg.com](https://www.iloveimg.com/crop-image) - Crop images
3. macOS: Preview (Tools → Adjust Size)
4. Windows: Paint or Photos app

## Without a Profile Image

The site will show an error if `profile.jpg` is missing. You must add a profile image before running the development server.

## Testing

After adding your image, restart the dev server:

```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to see your profile image.
