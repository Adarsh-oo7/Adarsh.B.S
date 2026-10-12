<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | Adarsh B S - IT Consultant</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          * { box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: #0a0e17;
            color: #e2e8f0;
            margin: 0;
            padding: 40px 20px;
            line-height: 1.6;
          }
          .container {
            max-width: 960px;
            margin: 0 auto;
            background: #111726;
            border: 1px solid #1e293b;
            border-radius: 12px;
            padding: 32px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          }
          .header {
            border-bottom: 1px solid #1e293b;
            padding-bottom: 20px;
            margin-bottom: 24px;
          }
          h1 {
            color: #ffffff;
            font-size: 26px;
            margin: 0 0 8px 0;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .badge {
            background: #ff5500;
            color: #ffffff;
            font-size: 12px;
            font-weight: bold;
            padding: 3px 8px;
            border-radius: 4px;
            text-transform: uppercase;
          }
          p.desc {
            color: #94a3b8;
            font-size: 14px;
            margin: 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 14px;
          }
          th {
            background: #1a2234;
            color: #f1f5f9;
            text-align: left;
            padding: 12px 16px;
            font-weight: 600;
            border-bottom: 2px solid #334155;
          }
          td {
            padding: 14px 16px;
            border-bottom: 1px solid #1e293b;
            color: #cbd5e1;
          }
          tr:hover td {
            background: rgba(255, 85, 0, 0.05);
          }
          a {
            color: #ff5500;
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority {
            display: inline-block;
            padding: 2px 8px;
            background: rgba(255, 85, 0, 0.15);
            color: #ff7733;
            border-radius: 4px;
            font-weight: 600;
          }
          .footer {
            margin-top: 32px;
            padding-top: 16px;
            border-top: 1px solid #1e293b;
            font-size: 12px;
            color: #64748b;
            display: flex;
            justify-content: space-between;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>XML Sitemap <span class="badge">Google Verified</span></h1>
            <p class="desc">This is an indexed XML sitemap generated for Google, Bing, and AI search engines.</p>
          </div>
          <table>
            <thead>
              <tr>
                <th style="width: 55%;">URL</th>
                <th style="width: 15%;">Priority</th>
                <th style="width: 15%;">Change Frequency</th>
                <th style="width: 15%;">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a target="_blank">
                      <xsl:attribute name="href">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="priority">
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <xsl:value-of select="substring(sitemap:lastmod, 0, 11)"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <div class="footer">
            <span>Domain: https://adarsh.digitalproductsolutions.in</span>
            <span>Adarsh B S - Freelance IT Consultant</span>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
