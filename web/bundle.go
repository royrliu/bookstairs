package web

import (
	"embed"
	"io/fs"
)

// This should work after the `npm run build`
//go:embed build
var bundle embed.FS

// Resources return a go embedded web static files in root path.
func Resources() fs.FS {
	resources, err := fs.Sub(bundle, "build")
	if err != nil {
		// No need to print any error. Just let it crash.
		panic(err)
	}

	return resources
}
