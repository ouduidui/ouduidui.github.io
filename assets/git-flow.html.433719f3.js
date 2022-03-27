import{f as o,o as c,c as r,a as s,h as n,F as p,d as l,i as e}from"./app.7e25f0e2.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";var d="/images/docs/git-flow/1.png",i="/images/docs/git-flow/2.png",h="/images/docs/git-flow/3.png",u="/images/docs/git-flow/4.png",b="/images/docs/git-flow/5.png";const f={},F=l('<h1 id="\u5B9E\u4E60\u7B2C\u4E00\u5929-\u4E0A\u53F8\u8BA9\u6211\u5B66\u4E60\u4E00\u4E0Bgit-flow" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4E60\u7B2C\u4E00\u5929-\u4E0A\u53F8\u8BA9\u6211\u5B66\u4E60\u4E00\u4E0Bgit-flow" aria-hidden="true">#</a> \u5B9E\u4E60\u7B2C\u4E00\u5929\uFF0C\u4E0A\u53F8\u8BA9\u6211\u5B66\u4E60\u4E00\u4E0BGit Flow</h1><h2 id="\u7B80\u8FF0git-flow" tabindex="-1"><a class="header-anchor" href="#\u7B80\u8FF0git-flow" aria-hidden="true">#</a> \u7B80\u8FF0Git Flow</h2><p>\u9996\u5148\uFF0C<code>Git Flow</code>\u5E76\u4E0D\u662F<code>Git</code>\u7684\u66FF\u4EE3\u54C1\uFF0C<code>Git Flow</code>\u53EA\u662F\u628A\u6807\u51C6\u7684<code>Git</code>\u547D\u4EE4\u7528\u811A\u672C\u7EC4\u5408\u4E86\u8D77\u6765\uFF0C\u5F62\u6210\u6BD4\u8F83\u6709\u6548\u800C\u7B80\u5355\u7684\u547D\u4EE4\u3002</p><p><code>Git Flow</code>\u53EA\u662F\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E00\u4E2A\u66F4\u7B80\u4FBF\u7684\u5DE5\u4F5C\u6D41\u7A0B\u547D\u4EE4\uFF0C\u800C\u66F4\u91CD\u8981\u7684\u662F\u6211\u4EEC\u9700\u8981\u53BB\u5B66\u4E60\u548C\u7406\u89E3\u5173\u4E8E\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u624D\u80FD\u6709\u6548\u7684\u8FED\u4EE3\u4EA7\u54C1\uFF0C\u907F\u514D\u6DF7\u4E71\u3002</p><p>\u800C\u5F53\u9879\u76EE\u5904\u4E8E\u4E00\u4E2A\u591A\u4EBA\u534F\u4F5C\u7684\u72B6\u6001\u4E0B\uFF0C\u5DE5\u4F5C\u6D41\u7A0B\u663E\u5F97\u975E\u5E38\u4E4B\u91CD\u8981\u3002\u5047\u8BBE\u5F53\u4E24\u4E2A\u751A\u81F3\u591A\u4E2A\u5F00\u53D1\u8005\u540C\u65F6\u518D\u5F00\u53D1\u5404\u81EA\u65B0\u529F\u80FD\u65F6\uFF0C\u5982\u679C\u5728\u540C\u4E00\u5206\u652F\u4E0A\u8FDB\u884C\u534F\u4F5C\u65F6\uFF0C\u8FD9\u5FC5\u7136\u4F1A\u4EA7\u751F\u5927\u91CF\u7684\u51B2\u7A81\u3002\u800C\u5DE5\u4F5C\u6D41\u7A0B\u7684\u505A\u6CD5\uFF0C\u5C31\u662F\u6BCF\u4E2A\u5F00\u53D1\u8005\u53EF\u4EE5\u5404\u81EA\u5207\u51FA\u4E00\u4E2A\u72EC\u7ACB\u5206\u652F\uFF0C\u5F53\u5404\u81EA\u529F\u80FD\u5B9E\u73B0\u5E76\u4E14\u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u518D\u81EA\u884C\u5408\u5E76\u5230<code>master</code>\u5206\u652F\u4E2D\uFF0C\u751A\u81F3\u65E0\u9700\u7B49\u5F85\u5176\u4ED6\u529F\u80FD\u5B9E\u73B0\u518D\u4E00\u8D77\u53D1\u5E03\u3002</p><h2 id="\u5206\u652F\u5E94\u7528\u60C5\u5883" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u5E94\u7528\u60C5\u5883" aria-hidden="true">#</a> \u5206\u652F\u5E94\u7528\u60C5\u5883</h2><p>\u5728<code>Git Flow</code>\u4E2D\uFF0C\u4E3B\u8981\u7684\u5206\u652F\u6709<code>master</code>\u3001<code>develop</code>\u3001<code>hotfix</code>\u3001<code>release</code>\u3001<code>feature</code> \u8FD9\u4E94\u79CD\u5206\u652F\u3002<code>master</code>\u548C<code>develop</code>\u5206\u652F\u662F\u6211\u4EEC\u6700\u5E38\u89C1\u7684\u5206\u652F\uFF0C\u5B83\u4EEC\u88AB\u79F0\u4F5C\u957F\u671F\u5206\u652F\uFF0C\u4E00\u76F4\u5B58\u6D3B\u5728\u6574\u4E2A\u5DE5\u4F5C\u6D41\u7A0B\u4E2D\uFF0C\u800C\u5176\u5B83\u7684\u5206\u652F\u5927\u90E8\u5206\u4F1A\u56E0\u4EFB\u52A1\u7ED3\u675F\u800C\u88AB\u5220\u9664\u3002</p><p><img src="'+d+'" alt="git flow\u5206\u652F\u5E94\u7528\u793A\u610F\u56FE"></p><h3 id="master\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#master\u5206\u652F" aria-hidden="true">#</a> master\u5206\u652F</h3><p>\u8BE5\u5206\u652F\u4E3B\u8981\u7528\u6765\u5B58\u653E\u7A33\u5B9A\u3001\u968F\u65F6\u53EF\u4EE5\u4E0A\u7EBF\u7684\u7248\u672C\u3002</p><p>\u8FD9\u4E2A\u5206\u652F\u7684\u6765\u6E90\u53EA\u80FD\u4ECE\u522B\u7684\u5206\u652F\u5408\u5E76\u8FC7\u6765\uFF0C\u5F00\u53D1\u8005\u4E0D\u4F1A\u76F4\u63A5<code>commit</code>\u5230\u8FD9\u4E2A\u5206\u652F\u4E0A\u3002</p><p>\u901A\u5E38\u6211\u4EEC\u4E5F\u4F1A\u5728\u8FD9\u4E2A\u5206\u652F\u4E0A\u7684\u63D0\u4EA4\u6253\u4E0A\u7248\u672C\u53F7\u6807\u7B7E\u3002</p><h3 id="develop\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#develop\u5206\u652F" aria-hidden="true">#</a> develop\u5206\u652F</h3><p>\u8FD9\u4E2A\u5206\u652F\u4E3B\u8981\u662F\u6240\u6709\u5F00\u53D1\u7684\u57FA\u7840\u5206\u652F\u3002</p><p>\u5F53\u8981\u6DFB\u52A0\u529F\u80FD\u65F6\uFF0C\u6240\u6709\u529F\u80FD\u90FD\u662F\u4ECE\u8FD9\u4E2A\u5206\u652F\u5207\u51FA\u53BB\u7684\uFF0C\u800C\u529F\u80FD\u5206\u652F\u5B9E\u73B0\u540E\uFF0C\u4E5F\u90FD\u4F1A\u5408\u5E76\u56DE\u6765\u8FD9\u4E2A\u5206\u652F\u4E2D\u3002</p><h3 id="hotfix\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#hotfix\u5206\u652F" aria-hidden="true">#</a> hotfix\u5206\u652F</h3><p>\u5F53\u7EBF\u4E0A\u4EA7\u54C1\u53D1\u751F\u4E86\u7D27\u6025\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u4ECE<code>master</code>\u5206\u652F\u4E2D\u5F00\u4E00\u4E2A<code>hotfix</code>\u5206\u652F\u51FA\u6765\u8FDB\u884C\u4FEE\u590D\u3002</p><p>\u5F53<code>hotfix</code>\u5206\u652F\u4FEE\u590D\u5B8C\u6210\u4E4B\u540E\uFF0C\u5C31\u4F1A\u5408\u5E76\u5230<code>master</code>\u5206\u652F\u4E2D\uFF0C\u5E76\u4E14\u4E5F\u4F1A\u5408\u5E76\u5230<code>develop</code>\u5206\u652F\u4E2D\u3002</p><h3 id="release\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#release\u5206\u652F" aria-hidden="true">#</a> release\u5206\u652F</h3><p>\u5F53<code>develop</code>\u5206\u652F\u5B8C\u6210\u9700\u6C42\u540E\uFF0C\u5C31\u53EF\u4EE5\u4ECE<code>develop</code>\u5206\u652F\u4E2D\u5F00\u4E00\u4E2A<code>release</code>\u5206\u652F\uFF0C\u8FDB\u884C\u4E0A\u7EBF\u524D\u6700\u540E\u7684\u6D4B\u8BD5\u3002</p><p>\u6D4B\u8BD5\u5B8C\u6210\u540E\uFF0C\u91CA\u653E<code>release</code>\u5206\u652F\u5C06\u4F1A\u540C\u65F6\u5408\u5E76\u5230<code>master</code>\u4EE5\u53CA<code>develop</code>\u5206\u652F\u4E2D\u3002</p><h3 id="feature\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#feature\u5206\u652F" aria-hidden="true">#</a> feature\u5206\u652F</h3><p>\u5F53\u6211\u4EEC\u9700\u8981\u8865\u5145\u529F\u80FD\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u4ECE<code>develop</code>\u5206\u652F\u4E2D\u5F00\u4E00\u4E2A<code>feature</code>\u5206\u652F\u8FDB\u884C\u529F\u80FD\u5F00\u53D1\u3002</p><p>\u5F53\u529F\u80FD\u5B9E\u73B0\u540E\uFF0C\u5728\u5C06<code>feature</code>\u5206\u652F\u5408\u5E76\u5230<code>develop</code>\u5206\u652F\u4E2D\uFF0C\u7B49\u5F85\u6700\u540E\u7684\u6D4B\u8BD5\u53D1\u5E03\u3002</p><h3 id="\u793A\u610F\u56FE" tabindex="-1"><a class="header-anchor" href="#\u793A\u610F\u56FE" aria-hidden="true">#</a> \u793A\u610F\u56FE</h3><p><img src="'+i+`" alt="git flow\u5206\u652F\u5E94\u7528\u793A\u610F\u56FE"></p><h2 id="\u5B89\u88C5\u4E0E\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4E0E\u4F7F\u7528" aria-hidden="true">#</a> \u5B89\u88C5\u4E0E\u4F7F\u7528</h2><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><h4 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> Mac</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">brew install git-flow</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u6CA1\u6709\u5B89\u88C5<code>brew</code>\u7684\u8BDD\u53EF\u4F7F\u7528\u4E0B\u5217\u547D\u4EE4\u8FDB\u884C\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;"> /bin/zsh -c </span><span style="color:#ECEFF4;">&quot;$(</span><span style="color:#A3BE8C;">curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh</span><span style="color:#ECEFF4;">)&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="win" tabindex="-1"><a class="header-anchor" href="#win" aria-hidden="true">#</a> Win</h4>`,33),m={href:"https://github.com/nvie/gitflow/wiki/Windows",target:"_blank",rel:"noopener noreferrer"},g=e("Windows\u5B89\u88C5git flow"),E=l(`<h3 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h3><p>\u5148\u5C06\u9879\u76EE\u514B\u9686\u5230\u672C\u5730\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git clone </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">project-url</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u521D\u59CB\u5316<code>Git Flow</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git flow init</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u547D\u4EE4\u884C\u4F1A\u63D0\u793A\u4F60\u662F\u5426\u4FEE\u6539<code>Git Flow</code>\u63D0\u4F9B\u7684\u9ED8\u8BA4\u5206\u652F\u524D\u7F00\u3002\u4E0D\u540C\u573A\u666F\u7684\u5206\u652F\u524D\u7F00\u4E0D\u540C\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5206\u652F\u524D\u7F00\u662F\u8FD9\u6837\u7684\u3002</p><table><thead><tr><th style="text-align:center;">\u573A\u666F</th><th style="text-align:center;">\u5206\u652F\u524D\u7F00</th></tr></thead><tbody><tr><td style="text-align:center;">\u65B0\u529F\u80FD</td><td style="text-align:center;">feature</td></tr><tr><td style="text-align:center;">\u9884\u53D1\u5E03</td><td style="text-align:center;">release</td></tr><tr><td style="text-align:center;">\u70ED\u4FEE\u590D</td><td style="text-align:center;">hotfix</td></tr><tr><td style="text-align:center;">\u6253\u6807\u7B7E</td><td style="text-align:center;">\u7A7A</td></tr></tbody></table><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">Which branch should be used </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> bringing forth production releases</span><span style="color:#81A1C1;">?</span></span>
<span class="line"><span style="color:#D8DEE9FF;">   - develop</span></span>
<span class="line"><span style="color:#D8DEE9FF;">   - master</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Branch name </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> production releases: </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">master</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">Which branch should be used </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> integration of the </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">next release</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">?</span></span>
<span class="line"><span style="color:#D8DEE9FF;">   - develop</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Branch name </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">next release</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> development: </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">develop</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">How to name your supporting branch prefixes</span><span style="color:#81A1C1;">?</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Feature branches</span><span style="color:#81A1C1;">?</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">feature/</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Release branches</span><span style="color:#81A1C1;">?</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">release/</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Hotfix branches</span><span style="color:#81A1C1;">?</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">hotfix/</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Support branches</span><span style="color:#81A1C1;">?</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">support/</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Version tag prefix</span><span style="color:#81A1C1;">?</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[]</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5206\u652F\u524D\u7F00\u7684\u4F5C\u7528\u662F\u533A\u5206\u4E0D\u540C\u5206\u652F\u7684\u4F7F\u7528\u573A\u666F\uFF0C\u540C\u65F6\u5F53\u4F60\u4F7F\u7528<code>Git Flow</code>\u547D\u4EE4\u65F6\u5C31\u4E0D\u9700\u8981\u624B\u52A8\u589E\u52A0\u5206\u652F\u524D\u7F00\uFF0C<code>Git Flow</code>\u4F1A\u5E2E\u4F60\u52A0\u4E0A\u3002</p><p>\u901A\u5E38\u60C5\u51B5\u4E0B\u4E0D\u9700\u8981\u4FEE\u6539\u9ED8\u8BA4\u7684\u547D\u540D\u524D\u7F00\uFF0C\u53EA\u9700\u8981\u52A0\u4E0A<code>-d</code>\u5C31\u53EF\u4EE5\u8DF3\u8FC7\u4FEE\u6539\u547D\u540D\u6B65\u9AA4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git flow init -d</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="feature\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#feature\u573A\u666F" aria-hidden="true">#</a> feature\u573A\u666F</h3><p><img src="`+h+`" alt="feature\u573A\u666F"></p><p>\u5F53\u6211\u4EEC\u9700\u8981\u5F00\u53D1\u4E00\u4E2A\u65B0\u529F\u80FD\u7684\u65F6\u5019\uFF0C\u6B64\u65F6\u9700\u8981\u57FA\u4E8E<code>develop</code>\u5206\u652F\u62C9\u51FA<code>feature</code>\u5206\u652F\u8FDB\u884C\u5F00\u53D1\uFF0C\u5373<code>feature</code>\u573A\u666F\u7684\u751F\u547D\u5468\u671F\u5F00\u59CB\u3002</p><p>\u901A\u5E38\u6765\u8BF4\uFF0C\u4E00\u79CD\u573A\u666F\u7684\u5B8C\u6574\u751F\u547D\u5468\u671F\u81F3\u5C11\u5305\u542B\u4EE5\u4E0B\u51E0\u79CD\u884C\u4E3A\uFF1A</p><ul><li><strong>start</strong> \uFF1A\u5F00\u59CB\u5F00\u53D1</li><li><strong>publish</strong> \uFF1A\u53D1\u5E03\u5230\u8FDC\u7A0B\u5206\u652F</li><li><strong>finish</strong> \uFF1A\u5B8C\u6210\u5F00\u53D1\u3001\u5408\u5E76\u5206\u652F</li></ul><h4 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h4><p>\u65B0\u529F\u80FD\u5F00\u59CB\u5F00\u53D1\u524D\uFF0C\u9700\u51C6\u5907\u597D\u5F00\u53D1\u5206\u652F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git flow feature start </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">feature-name</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6267\u884C\u4E0A\u9762\u547D\u4EE4\u540E\uFF0C\u5C06\u4F1A\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code>&lt;feature-name&gt;</code> \u7684\u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F\u3002</p><p><strong>\u800C\u4E14\u65E0\u8BBA\u4F60\u5F53\u524D\u5904\u4E8E\u54EA\u4E2A\u5206\u652F\uFF0C\u5B83\u90FD\u4F1A\u57FA\u4E8E\u672C\u5730<code>develop</code>\u5206\u652F\u521B\u5EFA\u7684\u3002</strong></p><p>\u4E0A\u8FF0\u547D\u4EE4\u76F8\u5F53\u4E8E\u6267\u884C\u4E86\u4E0B\u9762\u7684<code>Git</code>\u64CD\u4F5C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git checkout -b feature/</span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">feature-name</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> develop</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u9700\u8981\u6CE8\u610F\u7684\u4E00\u70B9\u662F\uFF0C\u8BE5\u5206\u652F\u662F\u57FA\u7840\u672C\u5730\u7684<code>develop</code> \u5206\u652F\u521B\u5EFA\uFF0C\u6240\u4EE5\u6267\u884C\u6B64\u547D\u4EE4\u94B1\u4E00\u822C\u9700\u8981\u62C9\u53D6\u6700\u65B0\u7684\u8FDC\u7A0B\u4EE3\u7801\u3002</p></blockquote><h4 id="publish" tabindex="-1"><a class="header-anchor" href="#publish" aria-hidden="true">#</a> publish</h4><p>\u5728\u672C\u5730\u5F00\u53D1\u5B8C\u6210\u65B0\u529F\u80FD\u5E76\u8FDB\u884C<code>commit</code>\u64CD\u4F5C\u540E\uFF0C\u9700\u8981\u5C06\u672C\u5730\u4EE3\u7801\u63D0\u4EA4\u5230\u8FDC\u7A0B\u4ED3\u5E93\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git flow feature publish </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">feature-name</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8BE5\u547D\u4EE4\u4E3B\u8981\u505A\u4E86\u4E09\u4EF6\u4E8B\u60C5\uFF1A</p><ul><li>\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code>feature/&lt;feature-name&gt;</code>\u7684\u8FDC\u7A0B\u5206\u652F</li><li>\u672C\u5730\u5206\u652F<code>track</code>\u8FDC\u7A0B\u5206\u652F</li><li>\u5982\u679C\u672C\u5730\u5B58\u5728\u8FD8\u6CA1\u63D0\u4EA4\u7684\u4EE3\u7801\uFF0C\u5C31\u8FDB\u884C\u4EE3\u7801\u63D0\u4EA4</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git push origin feature/</span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">feature-name</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">git push --set-upstream origin feature/</span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">feature-name</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">git push origin</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5F53\u4F60\u6267\u884C\u540E<code>publish</code>\u64CD\u4F5C\u540E\uFF0C\u540E\u7EED\u8FD8\u9700\u8981\u8FDB\u884C\u4EE3\u7801\u63D0\u4EA4\u7684\u8BDD\uFF0C\u53EA\u9700\u6267\u884C\u6B63\u5E38\u7684<code>push</code>\u547D\u4EE4\u65E2\u53EF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git push</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="finish" tabindex="-1"><a class="header-anchor" href="#finish" aria-hidden="true">#</a> finish</h4><p>\u5F53\u529F\u80FD\u5F00\u53D1\u5B8C\u6BD5\u540E\u5C31\u5C06\u8FDB\u5165\u6D4B\u8BD5\u9636\u6BB5\uFF0C\u6B64\u65F6\u9700\u8981\u5C06\u8BE5\u5206\u652F\u5408\u5E76\u5230<code>develop</code>\u5206\u652F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git flow feature finish </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">feature-name</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8BE5\u547D\u4EE4\u4E5F\u4E3B\u8981\u505A\u4E86\u4E09\u4EF6\u4E8B\u60C5\uFF1A</p><ul><li>\u5207\u6362\u5230<code>develop</code>\u5206\u652F</li><li>\u5408\u5E76\u4EE3\u7801\u5230<code>develop</code>\u5206\u652F</li><li>\u5220\u9664\u672C\u5730<code>feature/&lt;feature-name&gt;</code>\u5206\u652F</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git checkout develop</span></span>
<span class="line"><span style="color:#D8DEE9FF;">git merge feature/</span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">feature-name</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">git branch -d feature/</span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">feature-name</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>Git Flow</code>\u7684<code>merge</code>\u64CD\u4F5C\u4E0E\u9ED8\u8BA4\u7684<code>git merge</code>\u64CD\u4F5C\u6709\u4E9B\u4E0D\u540C\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5B83\u4F1A\u68C0\u67E5\u672C\u6B21<code>merge</code>\u6709\u591A\u5C11<code>commit</code>\u8BB0\u5F55\uFF0C\u5982\u679C\u4EC5\u6709\u4E00\u6761\u7684\u8BDD\u91C7\u7528<code>fast-forward</code>\u6A21\u5F0F\uFF0C\u5373\u53EA\u79FB\u52A8<code>HEAD</code>\u6307\u9488\u800C\u4E0D\u4F1A\u751F\u6210\u63D0\u4EA4\u8BB0\u5F55\uFF1B\u5982\u679C\u8D85\u8FC7\u4E00\u6761<code>commit</code>\u7684\u8BDD\uFF0C\u8FD9\u91C7\u7528<code>no-ff</code>\u6A21\u5F0F\uFF0C\u8BE5\u6A21\u5F0F\u4E0B\u5219\u4F1A\u591A\u751F\u6210\u4E00\u6761<code>merge</code>\u7684<code>commit</code>\u8BB0\u5F55\u3002</p><p>\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u5F53\u6709\u591A\u6761\u63D0\u4EA4\u8BB0\u5F55\u65F6\u65B9\u4FBF\u8FDB\u884C\u4EE3\u7801\u56DE\u9000\u548C\u8BB0\u5F55\u76D1\u5BDF\uFF0C\u800C\u53EA\u6709\u5355\u6761\u63D0\u4EA4\u8BB0\u5F55\u7684\u65F6\u5019\u5219\u7B80\u5316\u4EE3\u7801\u63D0\u4EA4\u8BB0\u5F55\u4ECE\u800C\u4FBF\u4E8E\u7BA1\u7406\u3002</p><p>\u5F53<code>finish</code>\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C<code>merge</code>\u53D1\u751F\u4E86\u51B2\u7A81\uFF0C\u5219\u4F1A\u7EC8\u7AEF<code>finish</code>\u64CD\u4F5C\uFF0C\u4E0D\u4F1A\u5220\u9664<code>feature/&lt;feature-name&gt;</code>\u5206\u652F\uFF0C\u540C\u65F6\u4E5F\u5904\u4E8E<code>develop</code>\u5206\u652F\u4E0A\u3002</p><p>\u5F53\u672C\u5730\u51B2\u7A81\u89E3\u51B3\u5E76<code>commit</code>\u540E\uFF0C\u91CD\u65B0\u8FDB\u884C<code>finish</code>\u64CD\u4F5C\u5373\u53EF\u3002</p><p>\u53E6\u5916\uFF0C<code>finish</code>\u6307\u4EE4\u8FD8\u652F\u6301\u4E09\u4E2A\u9644\u52A0\u53C2\u6570\uFF1A</p><ul><li><code>-r</code> \uFF1A\u5373merge\u524D\u5148\u6267\u884C<code>rebase</code>\uFF0C\u4F46\u5373\u4F7F<code>rebase</code>\u540E\u7B26\u5408<code>fast-forward</code>\u6761\u4EF6\u4E5F\u4E0D\u4E00\u5B9A\u4F1A\u7528<code>fast-forward</code>\u3002</li><li><code>-F</code> \uFF1A\u5373\u5408\u5E76\u5B8C\u6210\u8FDE\u540C\u8FDC\u7A0B\u5206\u652F\u4E00\u5E76\u5220\u9664\u3002</li><li><code>-k</code> \uFF1A\u5373\u4FDD\u7559\u672C\u5730<code>feature</code>\u5206\u652F\uFF0C\u4E0D\u6267\u884C<code>delete</code>\u52A8\u4F5C\u3002</li></ul><h3 id="release\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#release\u573A\u666F" aria-hidden="true">#</a> release\u573A\u666F</h3><p><img src="`+u+`" alt="release\u573A\u666F"></p><p>\u5F53\u65B0\u529F\u80FD\u5F00\u53D1\u5B8C\u6210\u540E\uFF0C\u5C06\u8FDB\u5165\u6D4B\u8BD5\u9636\u6BB5\uFF0C\u6B64\u65F6\u9700\u8981\u57FA\u4E8E<code>develop</code>\u5206\u652F\u62C9\u51FA<code>release</code> \u5206\u652F\u8FDB\u884C\u96C6\u6210\u6D4B\u8BD5\uFF0C\u4E5F\u6709\u5C06<code>release</code>\u573A\u666F\u4F5C\u4E3A\u9884\u53D1\u5E03\u73AF\u5883\u8FDB\u884C\u6D4B\u8BD5\u3002</p><p>\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4E00\u822C\u800C\u8A00<code>release</code>\u53EA\u6709\u5C11\u6570\u6539\u52A8\u3002</p><h4 id="start-1" tabindex="-1"><a class="header-anchor" href="#start-1" aria-hidden="true">#</a> start</h4><p>\u4F7F\u7528<code>start</code>\u5F00\u542F\u4E00\u4E2A<code>release</code>\u573A\u666F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git flow release start </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">release-name</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8BE5\u547D\u4EE4\u4F1A\u57FA\u4E8E\u672C\u5730\u7684<code>develop</code>\u5206\u652F\u521B\u5EFA\u4E00\u4E2A<code>release/&lt;release-name&gt;</code>\u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230\u8FD9\u4E2A\u5206\u652F\u3002</p><blockquote><p>\u9700\u8981\u6CE8\u610F\u4E00\u70B9\u662F\uFF0C\u5982\u679C\u672C\u5730\u8FD8\u6709\u672A<code>finish</code>\u7684<code>release</code>\u5206\u652F\u7684\u8BDD\uFF0C\u5C06\u4E0D\u5141\u8BB8\u4F7F\u7528<code>start</code>\u6307\u4EE4\u5F00\u542F\u65B0\u7684<code>release</code>\u5206\u652F\uFF0C\u8FD9\u4E00\u70B9\u662F\u5BF9\u5E76\u884C\u53D1\u5E03\u7684\u4E00\u4E2A\u9650\u5236\u3002</p></blockquote><h4 id="publish-1" tabindex="-1"><a class="header-anchor" href="#publish-1" aria-hidden="true">#</a> publish</h4><p>\u4E3A\u4E86\u8BA9\u5176\u4ED6\u534F\u540C\u4EBA\u5458\u80FD\u591F\u770B\u5230\u8BE5\u5206\u652F\u5E76\u4E00\u540C\u6D4B\u8BD5\uFF0C\u9700\u8981\u5C06\u5176\u53D1\u5E03\u51FA\u53BB\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git flow release publish </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">release-name</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="finish-1" tabindex="-1"><a class="header-anchor" href="#finish-1" aria-hidden="true">#</a> finish</h4><p>\u5F85\u6D4B\u8BD5\u901A\u8FC7\u540E\u9700\u8981\u53D1\u5E03\u6B63\u5F0F\u7248\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git flow release finish </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">release-name</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8BE5\u547D\u4EE4\u7684\u52A8\u4F5C\u4F1A\u6BD4\u8F83\u591A\uFF0C\u5927\u81F4\u662F\uFF1A</p><ul><li><code>git fetch</code>\uFF0C\u62C9\u53D6\u6700\u65B0\u7684\u4EE3\u7801</li><li>\u5C06\u5206\u652F\u5408\u5E76\u5230<code>master</code>\u5206\u652F</li><li>\u751F\u6210\u540D\u4E3A<code>&lt;release-name&gt;</code>\u7684<code>tag</code></li><li>\u5C06\u5206\u652F\u5408\u5E76\u5230<code>develop</code>\u5206\u652F</li><li>\u5220\u9664<code>release/&lt;release-name&gt;</code>\u5206\u652F</li><li>\u5207\u6362\u56DE<code>develop</code>\u5206\u652F</li></ul><p>\u5982\u679C<code>merge</code>\u4EA7\u751F\u51B2\u7A81\u4E0D\u4F1A\u7EC8\u6B62\u6D41\u7A0B\uFF0C\u53EA\u662F\u4E0D\u4F1A\u5C06\u672C\u5730\u7684<code>release</code>\u5206\u652F\u5220\u9664\u3002\u5F85\u89E3\u51B3\u5B8C\u51B2\u7A81\u540E\u9700\u518D\u6B21\u6267\u884C<code>finish</code>\u64CD\u4F5C\u3002</p><p><code>finish</code>\u53EA\u662F\u5B8C\u6210\u4E86\u672C\u5730\u4EE3\u7801\u7684\u4E00\u7CFB\u5217\u64CD\u4F5C\uFF0C\u53EF\u4F7F\u7528\u4E0B\u5217\u547D\u4EE4\u8FDB\u884C\u63A8\u9001\u6240\u6709\u7684\u5206\u652F\u548C<code>tag</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git push origin --all</span></span>
<span class="line"><span style="color:#D8DEE9FF;">git push origin --tag</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="hotfix\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#hotfix\u573A\u666F" aria-hidden="true">#</a> hotfix\u573A\u666F</h3><p><img src="`+b+`" alt="release\u573A\u666F"></p><p>\u5982\u679C\u5728\u7EBF\u4E0A\u53D1\u73B0\u4E86bug\uFF0C\u9700\u8981\u8FDB\u884C\u7D27\u6025\u4FEE\u590D\u7684\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u7528\u5230\u4E86<code>hotfix</code>\u573A\u666F\u3002</p><h4 id="start-2" tabindex="-1"><a class="header-anchor" href="#start-2" aria-hidden="true">#</a> start</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git flow hotfix start </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">hotfix-name</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8BE5\u547D\u4EE4\u5C06\u4ECE<code>master</code>\u5206\u652F\u521B\u5EFA\u4E86\u4E00\u4E2A<code>hotfix/&lt;hotfix-name&gt;</code>\u7684\u5206\u652F\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F\u3002</p><h4 id="finish-2" tabindex="-1"><a class="header-anchor" href="#finish-2" aria-hidden="true">#</a> finish</h4><p><code>hotfix</code>\u6CA1\u6709<code>publish</code>\u547D\u4EE4\uFF0C\u56E0\u4E3A<code>Git Flow</code>\u8BA4\u4E3A<code>hotfix</code>\u5E94\u8BE5\u662F\u5C0F\u8303\u56F4\u7684\u6539\u52A8\uFF0C\u4E0D\u9700\u8981\u5176\u4ED6\u534F\u540C\u4EBA\u5458\u53C2\u4E0E\u3002</p><p>\u4F46\u672C\u5730\u4FEE\u6539\u7ED3\u675F\u5E76\u8FDB\u884C<code>commit</code>\u64CD\u4F5C\u540E\uFF0C\u5219\u6267\u884C<code>finish</code>\u64CD\u4F5C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">git flow hotfix finish </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">hotfix-name</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8BE5\u547D\u4EE4\u6240\u505A\u4EFB\u52A1\u4E0E<code>release</code>\u57FA\u672C\u76F8\u540C\uFF0C\u5148\u62C9\u53D6\u4EE3\u7801\uFF0C\u7136\u540E\u5C06\u5206\u652F\u5408\u5E76\u5230<code>master</code>\u3001<code>develop</code>\u5206\u652F\u4E2D\uFF0C\u5E76\u4E14\u6253\u4E0Atag\uFF0C\u7136\u540E\u5220\u9664\u8BE5\u5206\u652F\uFF0C\u6700\u540E\u5207\u56DE<code>develop</code>\u5206\u652F\u3002</p><h2 id="\u5176\u4ED6\u4EE3\u7801\u5DE5\u4F5C\u6D41" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u4EE3\u7801\u5DE5\u4F5C\u6D41" aria-hidden="true">#</a> \u5176\u4ED6\u4EE3\u7801\u5DE5\u4F5C\u6D41</h2>`,77),y=e("\u4E0E"),D=s("code",null,"Git Flow",-1),v=e("\u76F8\u4F3C\u7684\u4EE3\u7801\u7BA1\u7406\u5DE5\u4F5C\u6D41\u8FD8\u6709"),x={href:"https://guides.github.com/introduction/flow/",target:"_blank",rel:"noopener noreferrer"},C=e("Github Flow"),w=e("\u548C"),k={href:"https://docs.gitlab.com/ee/topics/gitlab_flow.html",target:"_blank",rel:"noopener noreferrer"},_=e("Gitlab Flow"),A=e("\u3002"),G=l("<ul><li><code>Github Flow</code>\u662F\u7B80\u5316\u7248\u7684<code>Git Flow</code>\uFF0C\u5B83\u4F7F\u7528\u4E86<code>main</code>\u548C<code>feature</code>\u6765\u7BA1\u7406\u4EE3\u7801\uFF0C\u5B83\u53EA\u6709\u4E00\u4E2A\u957F\u671F\u5206\u652F\uFF0C\u5C31\u662F<code>main</code>\u3002</li><li><code>Gitlab Flow</code>\u66F4\u5173\u6CE8\u4EE3\u7801\u7684\u6301\u7EED\u96C6\u6210\uFF0C\u4E00\u4E2A\u7248\u672C\u9700\u8981\u521B\u5EFA\u6D4B\u8BD5\u73AF\u5883\u3001\u9884\u89C8\u73AF\u5883\u3001\u751F\u6210\u73AF\u5883\u7684\u5206\u652F\uFF0C\u6700\u540E\u6C47\u603B\u5230<code>stable branch</code>\u5206\u652F\u7528\u4E8E\u53D1\u5E03\u3002</li></ul>",1);function q(B,H){const a=o("ExternalLinkIcon");return c(),r(p,null,[F,s("p",null,[s("a",m,[g,n(a)])]),E,s("p",null,[y,D,v,s("a",x,[C,n(a)]),w,s("a",k,[_,n(a)]),A]),G],64)}var W=t(f,[["render",q]]);export{W as default};
