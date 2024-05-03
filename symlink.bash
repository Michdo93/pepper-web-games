#!/bin/bash

# Pfad zum Zielverzeichnis
target_dir="/home/nao/.local/share/PackageManager/apps/"

# Name des symbolischen Links
link_name="pepper-web-games"

# Pfad zum Quellverzeichnis
source_dir="/home/nao/pepper-web-games"

# Erstellen des symbolischen Links
ln -s "$source_dir" "$target_dir$link_name"

# Ausgabe der Erfolgsmeldung
echo "Symbolic Link for Pepper-Web-Games was successfully created."
