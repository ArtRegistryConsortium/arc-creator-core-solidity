Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
API ReferenceFile ConventionsMetadata Files
# Metadata Files API Reference
This section of the docs covers **Metadata file conventions**. File-based metadata can be defined by adding special metadata files to route segments.
Each file convention can be defined using a static file (e.g. `opengraph-image.jpg`), or a dynamic variant that uses code to generate the file (e.g. `opengraph-image.js`).
Once a file is defined, Next.js will automatically serve the file (with hashes in production for caching) and update the relevant head elements with the correct metadata, such as the asset's URL, file type, and image size.
> **Good to know** :
>   * Special Route Handlers like `sitemap.ts`, `opengraph-image.tsx`, and `icon.tsx`, and other metadata files are cached by default.
>   * If using along with `middleware.ts`, configure the matcher to exclude the metadata files.
> 

### favicon, icon, and apple-icon
API Reference for the Favicon, Icon and Apple Icon file conventions.
### manifest.json
API Reference for manifest.json file.
### opengraph-image and twitter-image
API Reference for the Open Graph Image and Twitter Image file conventions.
### robots.txt
API Reference for robots.txt file.
### sitemap.xml
API Reference for the sitemap.xml file.
Was this helpful?
supported.
Send
