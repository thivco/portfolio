{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  # nativeBuildInputs is usually what you want -- tools you need to run
  nativeBuildInputs = with pkgs.buildPackages; [ docker ];
  shellHook = ''
  sudo dockerd > /dev/null 2>&1 &
  '';
}