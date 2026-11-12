// ai checker
export default function handler(req, res) {
  const { utm_source } = req.query;

  // Define your destination mapping
  const redirectMap = {
    'chatgpt.com': '/chatgpt.html'
  };

  // Normalize to lowercase to avoid case-sensitivity issues
  const sourceKey = utm_source ? utm_source.toLowerCase() : '';
  const destination = redirectMap[sourceKey];

  if (destination) {
    // 302 = Temporary redirect (recommended for campaign/UTM links)
    return res.redirect(302, destination);
  }

  // Fallback if utm_source doesn't match any rule
  return res.redirect(302, '/');
}