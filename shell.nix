{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  # nativeBuildInputs is usually what you want -- tools you need to run
  nativeBuildInputs = with pkgs.buildPackages; [ docker docker-compose nodejs ];

  shellHook = ''
      if ! pgrep dockerd >/dev/null; then
        echo "Starting Docker daemon."
        sudo dockerd > /dev/null 2>&1 &
        sleep 2
      else
        echo "Docker daemon already running."
      fi
      docker compose down && docker compose up -d --build
      echo "You only need to click once, fool"
  '';
}
