## OpenC3 Tool Template

[Documentation](https://openc3.com)

This plugin provides a template for creating OpenC3 Tools in Vue

## Getting Started

1. Edit vue.config.js and replace "templatevue" with the name of your new tool
1. Edit plugin.txt and replace "templatevue" and "Template Vue" with the name of your tool
1. Edit plugin.txt and change ICON to something appropriate for your tool. You can pick any icon from https://materialdesignicons.com/. Just add mdi- in front of the icon name.
1. Edit package.json and update the name
1. Rename the .gemspec file to the name of your plugin
1. Edit the .gemspec file fields: name, summary, description, authors, email, and homepage
1. Update the LICENSE.txt file with your company name

## Building using a local Ruby/Node/Yarn/Rake Environment

1. yarn
1. rake build VERSION=1.0.0

## Building using Docker and the openc3-node container

If you don’t have a local node environment, you can use our openc3-node container to build custom tools and custom widgets

Mac / Linux:

`` docker run -it -v `pwd`:/openc3/local:z -w /openc3/local docker.io/openc3inc/openc3-node sh ``

Windows:

`docker run -it -v %cd%:/openc3/local -w /openc3/local docker.io/openc3inc/openc3-node sh`

1. yarn
1. rake build VERSION=1.0.0

## Installing into OpenC3 COSMOS

1. Go to the OpenC3 Admin Tool, Plugins Tab
1. Select your newly built plugin (ie. openc3-tool-template-vue-1.0.0.gem)
1. Click Install

## Contributing

We encourage you to contribute to OpenC3!

Contributing is easy.

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Before any contributions can be incorporated we do require all contributors to agree to a Contributor License Agreement

This protects both you and us and you retain full rights to any code you write.

## License

This OpenC3 plugin is released under the MIT License. See [LICENSE.txt](LICENSE.txt)
