![BookStairs Poster](docs/images/github-poster.png#gh-light-mode-only)
![BookStairs Poster](docs/images/github-poster-dark.png#gh-dark-mode-only)

[![LICENSE](https://img.shields.io/github/license/bookstairs/bookstairs)](https://github.com/bookstairs/bookstairs/blob/master/LICENSE)
[![Language](https://img.shields.io/badge/Language-Go-blue.svg)](https://golang.org/)
[![Go Report Card](https://goreportcard.com/badge/github.com/bookstairs/bookstairs)](https://goreportcard.com/report/github.com/bookstairs/bookstairs)
[![codecov](https://codecov.io/gh/bookstairs/bookstairs/branch/master/graph/badge.svg)](https://codecov.io/gh/bookstairs/bookstairs)
[![contribution](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)

## What is BookStairs?

BookStairs is an open-source personal EPUB library which was highly inspired
by [talebook](https://github.com/talebook/talebook),
[calibre-web](https://github.com/janeczku/calibre-web) and [BookBrowser](https://github.com/pgaskin/BookBrowser).

It's designed to serve millions of book. Aims for providing high performance, readability comparing with its
competitors. And it's easy to be deployed on any Unix-like systems with only one file.

+ __High performance__

BookStairs didn't use `metadata.db` which was created by calibre directly. We would index all the books' metadata by
[bluge](https://github.com/blugelabs/bluge) which can provide a better searching performance comparing to SQLite3.
Although bluge isn't fast enough comparing to elasticsearch, it's fast enough to serve the book indexing in memory mode.

+ __Better book organize__

The books' category is defined by
the [Chinese Library Classification](https://en.wikipedia.org/wiki/Chinese_Library_Classification).
Putting all the files into [SeaweedFS](https://github.com/chrislusf/seaweedfs) for fast file acess.
This will make the S3 support out of box.

* __Better book deduplication__

We would deduplication the book by
its [CIP (Cataloging in Publication)](https://www.capub.cn/zbbm/index_zbbm.shtml?id=7)
in China and [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number).

* __Better chinese books metadata management__

A lot of Chinese EPUBs don't generate with a valid metadata. We would correct it
by [CIP database](https://pdc.capub.cn/) and a builtin [Douban](https://www.douban.com/) spider.

* __Readability__

We provide a built-in online reader which supports bookmarks, quotes, notes and highlights. Every user could have
unlimited
bookshelf for personal needs.

* __Easy distribution__

The bookstairs was designed to be distributed with only one file on all the platforms. You don't need any predefine
configuration
file. Just download the latest release file and execute it in a working directory. The bookstairs would auto create the
database and application data files by your settings on a user-friendly web interface.

## State of this project

The current master branch is unstable and is not recommended for production use. BookStairs 1.0.0 (what will be the
first
release version) is currently in the development stage.

## Contributing

Contributions are welcomed and greatly appreciated. See [CONTRIBUTING](CONTRIBUTING.md) for details on submitting
patches and the contribution workflow.

## License

BookStairs is licensed under the AGPL-3.0. You are free to use this project, but you can't use it commercial purposes.
You should obtain a commercial license from the [author](mailto:xiaoyu@bookstairs.net) when you need some commercial usage.
See the [LICENSE](LICENSE) file for details.
