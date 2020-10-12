# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "pwastore-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Teemu Kallio"]
  spec.email         = ["teemu.kallio@pm.me"]

  spec.summary       = "Jekyll theme for PWA Store."
  spec.homepage      = "https://vielspas.github.io/pwastore/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
