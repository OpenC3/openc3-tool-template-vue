# encoding: ascii-8bit

# Copyright 2023 OpenC3, Inc.
# All Rights Reserved.
#
# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.

# Create the overall gemspec
spec = Gem::Specification.new do |s|
  s.name = 'openc3-tool-template-vue'
  s.summary = 'OpenC3 Tool Template Vue'
  s.description = <<-EOF
    This plugin provides a template for building OpenC3 tools in Vue
  EOF
  s.authors = ['Ryan Melton', 'Jason Thomas']
  s.email = ['ryan@openc3.com', 'jason@openc3.com']
  s.homepage = 'https://github.com/OpenC3/cosmos'

  s.platform = Gem::Platform::RUBY

  if ENV['VERSION']
    s.version = ENV['VERSION'].dup
  else
    time = Time.now.strftime("%Y%m%d%H%M%S")
    s.version = '0.0.0' + ".#{time}"
  end
  s.licenses = ['MIT']

  s.files = Dir.glob("{targets,lib,tools,microservices}/**/*") + %w(Rakefile LICENSE.txt README.md plugin.txt)
end
