#!/usr/bin/env bash

case $1 in
  start)
    pnpm start | cat
    ;;
  build)
    pnpm run build
    ;;
  run-dev)
    pnpm run dev | cat
    ;;
  *)
    pnpm "$@"
    ;;
esac