#!/bin/sh
cd soy/
java -jar ../tools/SoyToJsSrcCompiler.jar  --useCommonJsAsyncDef --dependencies "lib/soyutils.js" --outputPathFormat "../htdocs/js/{INPUT_DIRECTORY}/{INPUT_FILE_NAME_NO_EXT}.js" `find . -name '*.soy'`
cd -

