import{r as a,o as p,c as l,d as n,F as o,b as e}from"./app.6199ae92.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const c={},t=e(`<h1 id="require\u548Cimport\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#require\u548Cimport\u7684\u533A\u522B" aria-hidden="true">#</a> Require\u548CImport\u7684\u533A\u522B</h1><h2 id="\u5386\u53F2\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u5386\u53F2\u80CC\u666F" aria-hidden="true">#</a> \u5386\u53F2\u80CC\u666F</h2><ul><li><strong>require/exports</strong><ul><li>\u6765\u81EA\u91CE\u751F\u89C4\u8303\u5F53\u4E2D\uFF0C\u5373\u8FD9\u4E9B\u89C4\u8303\u662FJavaScript\u793E\u533A\u4E2D\u7684\u5F00\u53D1\u8005\u81EA\u5DF1\u8349\u62DF\u7684\u89C4\u5219\uFF0C\u5F97\u5230\u4E86\u5927\u5BB6\u7684\u627F\u8BA4\u548C\u5E7F\u6CDB\u7684\u5E94\u7528\uFF0C\u6BD4\u5982<code>CommonJS</code>\u3001<code>AMD</code>\u3001<code>CMD</code>\u7B49\u7B49\u3002\u800C<code>Node</code>\u9075\u5FAA<code>CommonJS</code>\u89C4\u8303\uFF0C<code>requireJS</code> \u9075\u5FAA<code>AMD</code>\uFF0C<code>seaJS</code>\u9075\u5FAA<code>CMD</code>\u3002</li><li>\u56E0\u4E3A<code>Node</code>\u65E0\u6CD5\u76F4\u63A5\u517C\u5BB9<code>ES6</code>\u8BED\u6CD5\uFF0C\u6240\u4EE5\u73B0\u9636\u6BB5<code>require/exports</code>\u4ECD\u7136\u662F\u5FC5\u8981\u4E14\u662F\u5FC5\u987B\u7684\u3002</li></ul></li><li><strong>import/export</strong><ul><li>\u6765\u81EAES6\u7684\u65B0\u89C4\u8303\uFF0C\u5373TC39 \u5236\u5B9A\u7684\u65B0\u7684 ECMAScript \u7248\u672C\u3002</li><li><code>babel</code>\u8BDE\u751F\u540E\uFF0C\u5B83\u80FD\u5C06\u8FD8\u672A\u88AB\u5BBF\u4E3B\u73AF\u5883\uFF08\u5404\u5927\u6D4F\u89C8\u5668\u3001<code>Node</code>\uFF09\u76F4\u63A5\u652F\u6301\u7684<code>ES6</code>\u8BED\u6CD5\u7F16\u8BD1\u4E3A<code>ES5</code>\uFF0C\u4E5F\u5C31\u662F\u80FD\u5C06<code>ES6 Module</code> \u7684<code>import/export</code>\u7F16\u8BD1\u4E3A<code>CommonJS</code> \u7684<code>require/exports</code>\u8FD9\u79CD\u5199\u6CD5\u3002</li></ul></li></ul><h2 id="\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u5DEE\u5F02" aria-hidden="true">#</a> \u5DEE\u5F02</h2><h3 id="\u5199\u6CD5\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u5199\u6CD5\u5DEE\u5F02" aria-hidden="true">#</a> \u5199\u6CD5\u5DEE\u5F02</h3><h4 id="require-exports" tabindex="-1"><a class="header-anchor" href="#require-exports" aria-hidden="true">#</a> require/exports</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#616E88;">/* \u5BFC\u51FA */</span></span>
<span class="line"><span style="color:#8FBCBB;">exports</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">fs</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">fs</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">      </span><span style="color:#616E88;">// \u5355\u4E2A\u7279\u6027\u5BFC\u51FA\uFF0C\u53EF\u5BFC\u51FA\u591A\u4E2A</span></span>
<span class="line"><span style="color:#8FBCBB;">module</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">exports</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">fs</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">   </span><span style="color:#616E88;">// \u6574\u4E2A\u6A21\u5757\u5BFC\u51FA\uFF0C\u6BCF\u4E2A\u6A21\u5757\u53EA\u5305\u542B\u4E00\u4E2A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">/* \u5F15\u5165 */</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">fs</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">fs</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">   </span><span style="color:#616E88;">// \u5F15\u5165\u6574\u4E2A\u6A21\u5757</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="import-export" tabindex="-1"><a class="header-anchor" href="#import-export" aria-hidden="true">#</a> import/export</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#616E88;">/* \u5BFC\u51FA */</span></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">default</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">fs</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">     </span><span style="color:#616E88;">// \u9ED8\u8BA4\u5BFC\u51FA \u6BCF\u4E2A\u6A21\u5757\u5305\u542B\u4E00\u4E2A \u6BCF\u6B21\u5BFC\u51FA\u90FD\u4F1A\u8986\u76D6\u524D\u4E00\u4E2A\u5BFC\u51FA</span></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">fs</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">       </span><span style="color:#616E88;">// \u5BFC\u51FA\u5355\u4E2A\u7279\u6027 \u6BCF\u4E2A\u6A21\u5757\u5305\u62EC\u591A\u4E2A</span></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">readFile</span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{}</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">    </span><span style="color:#616E88;">// \u5BFC\u51FA\u5355\u4E2A\u7279\u6027 \u6BCF\u4E2A\u6A21\u5757\u5305\u62EC\u591A\u4E2A</span></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#8FBCBB;">readFile</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">read</span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">   </span><span style="color:#616E88;">// \u5BFC\u51FA\u5217\u8868</span></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">fs</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">     </span><span style="color:#616E88;">// \u5BFC\u51FA\u6A21\u5757\u5408\u96C6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">/* \u5F15\u5165 */</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">fs</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">fs</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">       </span><span style="color:#616E88;">// \u5F15\u5165\u6574\u4E2A\u6A21\u5757\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">/fs.js</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">          </span><span style="color:#616E88;">// \u4EC5\u4E3A\u526F\u4F5C\u7528\u800C\u5F15\u5165\u4E00\u4E2A\u6A21\u5757 \u4E0D\u5BFC\u5165\u6A21\u5757\u4E2D\u7684\u4EFB\u4F55\u63A5\u53E3</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">as</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">fs</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">fs</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">    </span><span style="color:#616E88;">// \u5F15\u5165\u6574\u4E2A\u6A21\u5757\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#8FBCBB;">readFile</span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">fs</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">   </span><span style="color:#616E88;">// \u5F15\u5165readFile\u5355\u4E2A\u63A5\u53E3</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9;">readFile</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">as</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">read</span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">fs</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">   </span><span style="color:#616E88;">// \u5F15\u5165\u6A21\u5757\u4E2Dread\u63A5\u53E3\uFF0C\u5E76\u91CD\u547D\u540D\u4E3AreadFile</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">fs</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#8FBCBB;">readFile</span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">fs</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">   </span><span style="color:#616E88;">// \u5F15\u5165\u6574\u4E2A\u6A21\u5757\u7684\u5185\u5BB9\u548CreadFile\u63A5\u53E3</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u8F93\u51FA\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u5DEE\u5F02" aria-hidden="true">#</a> \u8F93\u51FA\u5DEE\u5F02</h3><h4 id="require-exports-1" tabindex="-1"><a class="header-anchor" href="#require-exports-1" aria-hidden="true">#</a> require/exports</h4><p><code>require/exports</code> \u8F93\u51FA\u7684\u662F\u4E00\u4E2A\u503C\u7684\u62F7\u8D1D\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53\u4F60\u5F15\u5165\u4E00\u4E2A\u503C\uFF0C\u6A21\u5757\u5185\u90E8\u7684\u53D8\u5316\u662F\u5F71\u54CD\u4E0D\u5230\u8FD9\u4E2A\u503C\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#616E88;">// test.js</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">num</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">addNum</span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">num</span><span style="color:#81A1C1;">++;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#8FBCBB;">module</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">exports</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">num</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">num</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">addNum</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">addNum</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// main.js</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">test</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">./test.js</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">test</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">num</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">     </span><span style="color:#616E88;">// output\uFF1A 0</span></span>
<span class="line"><span style="color:#D8DEE9;">test</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">addNum</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">test</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">num</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">     </span><span style="color:#616E88;">// output\uFF1A 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="import-export-1" tabindex="-1"><a class="header-anchor" href="#import-export-1" aria-hidden="true">#</a> import/export</h4><p><code>import/export</code>\u8F93\u51FA\u7684\u662F\u503C\u7684\u7D22\u5F15\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8BE5\u5F15\u7528\u5176\u5B9E\u662F\u4E00\u4E2A\u52A8\u6001\u5F15\u7528\uFF0C\u5E76\u4E0D\u4F1A\u7F13\u5B58\u503C\uFF0C\u5F53\u6A21\u5757\u5185\u90E8\u53D1\u751F\u53D8\u5316\uFF0C\u4F60\u7684\u5F15\u5165\u503C\u4E5F\u4F1A\u968F\u4E4B\u66F4\u65B0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#616E88;">// test.js</span></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">num</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">addNum</span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">num</span><span style="color:#81A1C1;">++;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// main.js</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#8FBCBB;">num</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">addNum</span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">./test.js</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">num</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">     </span><span style="color:#616E88;">// output\uFF1A 0</span></span>
<span class="line"><span style="color:#88C0D0;">addNum</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">num</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">     </span><span style="color:#616E88;">// output\uFF1A 1</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u52A0\u8F7D\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u5DEE\u5F02" aria-hidden="true">#</a> \u52A0\u8F7D\u5DEE\u5F02</h3><h4 id="require-exports-2" tabindex="-1"><a class="header-anchor" href="#require-exports-2" aria-hidden="true">#</a> require/exports</h4><p><code>CommonJS</code>\u6A21\u5757\u662F\u8FD0\u884C\u65F6\u52A0\u8F7D\u3002</p><p>\u56E0\u4E3A<code>CommonJS</code>\u6A21\u5757\u52A0\u8F7D\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5373<code>module.exports</code>\u5C5E\u6027\uFF0C\u8BE5\u5BF9\u8C61\u53EA\u6709\u5728\u811A\u672C\u8FD0\u884C\u5B8C\u624D\u751F\u6210\uFF0C\u4E5F\u56E0\u6B64\u6CA1\u529E\u6CD5\u518D\u7F16\u8BD1\u65F6\u505A\u201C\u9759\u6001\u4F18\u5316\u201D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9;">test1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">test2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">test3</span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">test</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">/* \u7B49\u540C\u4E8E */</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">_test</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">test</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">   </span><span style="color:#616E88;">// \u5B9E\u8D28\u4E0A\u52A0\u8F7D\u4E86\u6574\u4E2A\u6A21\u5757\uFF0C\u518D\u4ECE\u4E2D\u8BFB\u53D6\u8FD9\u4E09\u4E2A\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">test1</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">_test</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">test1</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">test2</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">_test</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">test2</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">test3</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">_test</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">test3</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="import-export-2" tabindex="-1"><a class="header-anchor" href="#import-export-2" aria-hidden="true">#</a> import/export</h4><p><code>ES6</code>\u6A21\u5757\u662F\u7F16\u8BD1\u65F6\u8F93\u51FA\u63A5\u53E3\u3002</p><p><code>ES6</code>\u6A21\u5757\u4E0D\u662F\u5BF9\u8C61\uFF0C\u5B83\u5BF9\u5916\u63A5\u53E3\u53EA\u662F\u4E00\u4E2A\u9759\u6001\u5B9A\u4E49\uFF0C\u5728\u4EE3\u7801\u9759\u6001\u89E3\u6790\u9636\u6BB5\u624D\u4F1A\u751F\u6210\uFF0C\u56E0\u6B64\u6548\u7387\u8981\u6BD4<code>CommonJS</code>\u6A21\u5757\u52A0\u8F7D\u9AD8\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#8FBCBB;">test1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">test2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">test3</span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">test</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">   </span><span style="color:#616E88;">// \u53EA\u4ECE\u6A21\u5757\u4E2D\u52A0\u8F7D\u8FD9\u4E09\u4E2A\u65B9\u6CD5\uFF0C\u5176\u4ED6\u7684\u4E0D\u52A0\u8F7D</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u5F02\u6B65\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u5DEE\u5F02" aria-hidden="true">#</a> \u5F02\u6B65\u5DEE\u5F02</h3><h4 id="require-exports-3" tabindex="-1"><a class="header-anchor" href="#require-exports-3" aria-hidden="true">#</a> require/exports</h4><p><code>CommonJS</code>\u6A21\u5757\u4E2D\u7684<code>require</code>\u662F\u540C\u6B65\u52A0\u8F7D\u6A21\u5757\u3002</p><h4 id="import-export-3" tabindex="-1"><a class="header-anchor" href="#import-export-3" aria-hidden="true">#</a> import/export</h4><p><code>ES6</code>\u6A21\u5757\u7684<code>import</code>\u547D\u4EE4\u662F\u5F02\u6B65\u52A0\u8F7D\u7684\uFF0C\u6709\u4E00\u4E2A\u72EC\u7ACB\u7684\u6A21\u5757\u4F9D\u8D56\u7684\u89E3\u6790\u9636\u6BB5\u3002</p>`,30);function E(F,y){const s=a("Comment");return p(),l(o,null,[t,n(s),n(s)],64)}var d=r(c,[["render",E]]);export{d as default};
