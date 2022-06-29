package config

import (
	"fmt"
	"runtime"
)

// This file could be replaced by debug/buildinfo after switching to go 1.18.
var (
	gitMajor string // major version, always numeric
	gitMinor string // minor version, numeric possibly followed by "+"

	gitVersion   = ""
	gitCommit    = "" // sha1 from git, output of $(git rev-parse HEAD)
	gitTreeState = "" // state of git tree, either "clean" or "dirty"

	buildDate = "1970-01-01T00:00:00Z" // build date in ISO8601 format, output of $(date -u +'%Y-%m-%dT%H:%M:%SZ')
)

// Version contains versioning information.
// how we'll want to distribute that information.
type Version struct {
	Major        string `json:"major"`
	Minor        string `json:"minor"`
	GitVersion   string `json:"gitVersion"`
	GitCommit    string `json:"gitCommit"`
	GitTreeState string `json:"gitTreeState"`
	BuildDate    string `json:"buildDate"`
	GoVersion    string `json:"goVersion"`
	Compiler     string `json:"compiler"`
	Platform     string `json:"platform"`
}

// BookStairsVersion will return and print the current project version.
// These properties are provided by goreleaser.
func BookStairsVersion() *Version {
	return &Version{
		Major:        gitMajor,
		Minor:        gitMinor,
		GitVersion:   gitVersion,
		GitCommit:    gitCommit,
		GitTreeState: gitTreeState,
		BuildDate:    buildDate,
		GoVersion:    runtime.Version(),
		Compiler:     runtime.Compiler,
		Platform:     fmt.Sprintf("%s/%s", runtime.GOOS, runtime.GOARCH),
	}
}
