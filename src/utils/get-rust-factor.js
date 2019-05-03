const formatVersion = version => {
  const [major, minor, patch] = version.split('.');

  return { major, minor, patch };
};

const getScore = (
  {
    major: latestMajor,
    minor: latestMinor,
    patch: latestPatch,
  },
  {
    major: currentMajor,
    minor: currentMinor,
    patch: currentPatch,
  }
) => {
  const isMajorlyRusty = latestMajor - currentMajor > 0;
  const hasMinorRust = latestMinor - currentMinor > 0;
  const hasRustPatches = latestPatch - currentPatch > 0;

  if (isMajorlyRusty) return "red";
  else if (hasMinorRust) return "yellow";
  else if (hasRustPatches) return "green";
}

export default module => {
  const { latest, current } = module;
  const latestVersion = formatVersion(latest);
  const currentVersion = formatVersion(current);

  return getScore(latestVersion, currentVersion);
};