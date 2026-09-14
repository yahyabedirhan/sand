#!/usr/bin/env sh
# one-time per clone: make every commit run gitleaks on the staged changes.
set -e
cd "$(git rev-parse --show-toplevel)"
command -v gitleaks >/dev/null || { echo "install gitleaks first: brew install gitleaks"; exit 1; }
cat > .git/hooks/pre-commit <<'HOOK'
#!/usr/bin/env sh
exec gitleaks git --pre-commit --staged --redact --config .gitleaks.toml
HOOK
chmod +x .git/hooks/pre-commit
echo "pre-commit hook installed"
