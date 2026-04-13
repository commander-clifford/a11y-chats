# a11y-chats

A Chrome extension for quick accessibility-oriented image audits.

## What it does

When you run the extension on the current page, it:

- expands common hidden or collapsed content
- scrolls to trigger lazy loading
- waits for images to finish loading
- collects page metadata
- lists every image it can find
- reports the image source, filename, and alt-text status

## Current audit output

For each image, the report shows:

- alt text
- alt status: `present`, `empty`, or `missing`
- filename
- source URL

The report header also shows page metadata such as title, description, canonical URL, Open Graph fields, and Twitter card fields when available.

## Install locally in Chrome

1. Download or clone the repository.
2. Open `chrome://extensions`.
3. Turn on **Developer mode**.
4. Click **Load unpacked**.
5. Select this project folder.

## Use

- Click the extension action on any page.
- Or use the keyboard shortcut:
  - macOS: `Command+Shift+Y`
  - Windows/Linux: `Ctrl+Shift+Y`

You can change the shortcut at `chrome://extensions/shortcuts`.

## Development notes

- Manifest version: MV3
- Entry files:
  - `manifest.json`
  - `background.js`
  - `contentScript.js`
  - `styles/inspector.css`

## Known limitation

This project is currently focused on image and metadata inspection. The `a11y-chats` name is broader than the current feature set.
