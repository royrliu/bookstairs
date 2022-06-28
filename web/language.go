package web

type Language interface {
	Code() string           // The short code of this language. Such as zh_CN, en_US, ja_JP
	Keys() []string         // Return all the available keys in this language pack.
	HasKey(string) bool     // Does this language has this translate key.
	Value(string) string    // Get the real translate result related to this key.
	Params(string) []string // Get the value template related formatter arguments.
}

// AvailableLanguages would load the i18next translate definition from the JSON files and return the language codes.
// It would parse the JSON files only once.
func AvailableLanguages() []string {
	return nil
}

// FindLanguage would load language by the language code. We would return nil if the language code isn't available.
func FindLanguage(code string) Language {

	return nil
}
