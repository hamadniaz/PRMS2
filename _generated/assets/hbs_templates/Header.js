define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.site_description : stack1), depth0))
    + "</p>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <a href=\"/pages/"
    + alias2(alias1((depth0 != null ? depth0.page_slug : depth0), depth0))
    + "/\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.navigation_title : stack1), depth0))
    + "</a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), buffer = 
  "<header>\r\n    <div>\r\n        <h1><a href=\"/\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.site_name : stack1), depth0))
    + "</a></h1>\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.site_description : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</header>\r\n<nav>\r\n    <div>\r\n";
  stack1 = ((helper = (helper = helpers.navlinks || (depth0 != null ? depth0.navlinks : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"navlinks","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!helpers.navlinks) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n</nav>";
},"useData":true}); });