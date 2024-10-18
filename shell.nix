{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  # nativeBuildInputs is usually what you want -- tools you need to run
  nativeBuildInputs = with pkgs.buildPackages; [ docker ];

  shellHook = ''
      if ! pgrep dockerd >/dev/null; then
        echo "Starting Docker daemon."
        sudo dockerd > /dev/null 2>&1 &
        sleep 2
      else
        echo "Docker daemon already running."
      fi
  '';
}