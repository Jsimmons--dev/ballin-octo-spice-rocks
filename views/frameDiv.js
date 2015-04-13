function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (logo, book, welcomeTextTitle, welcomeTextBody, yqzplug, yqzother, title, subtitle, description, pics, facts, years, applet, b1, b2, b3, feedbackButton, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29) {
var jade_indent = [];
jade_mixins["single"] = function(className){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("\n");
buf.push.apply(buf, jade_indent);
buf.push("<div" + (jade.cls([className], [true])) + "><img" + (jade.attr("src", '' + (logo) + '', true, false)) + " class=\"logoC\"/><img" + (jade.attr("src", '' + (book) + '', true, false)) + " class=\"bookC\"/>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<div class=\"welcomeC\">\n    ");
buf.push.apply(buf, jade_indent);
buf.push("<p class=\"welcomeTitle\">" + (jade.escape((jade_interp = welcomeTextTitle) == null ? '' : jade_interp)) + "</p>\n    ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = welcomeTextBody) == null ? '' : jade_interp)) + "</p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("</div>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<div class=\"yqzplugC\">\n    ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = yqzplug) == null ? '' : jade_interp)) + "<a" + (jade.attr("href", '' + (yqzother) + '', true, false)) + " class=\"listings\"> Click Here</a></p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("</div>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<div class=\"titleC\">" + (jade.escape((jade_interp = title) == null ? '' : jade_interp)) + " </div>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<div class=\"subtitleC\">" + (jade.escape((jade_interp = subtitle) == null ? '' : jade_interp)) + "</div>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<div class=\"descC\">" + (jade.escape((jade_interp = description) == null ? '' : jade_interp)) + "</div>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<ul class=\"picsC\"> <img" + (jade.attr("src", '' + (pics) + '', true, false)) + " class=\"picsi\"/></ul>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<div class=\"factsC\">" + (jade.escape((jade_interp = facts) == null ? '' : jade_interp)) + "\n    ");
buf.push.apply(buf, jade_indent);
buf.push("<div class=\"years\">" + (jade.escape((jade_interp = years) == null ? '' : jade_interp)) + "</div>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("</div>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<div class=\"appletC\">" + (jade.escape((jade_interp = applet) == null ? '' : jade_interp)) + "</div>");
jade_indent.push('  ');
jade_mixins["boilerplate"]('boilerC');
jade_indent.pop();
buf.push("\n");
buf.push.apply(buf, jade_indent);
buf.push("</div>");
};
jade_mixins["boilerplate"] = function(boilerC){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("\n");
buf.push.apply(buf, jade_indent);
buf.push("<div" + (jade.cls([boilerC], [true])) + ">\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b1) == null ? '' : jade_interp)) + "</p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b2) == null ? '' : jade_interp)) + "   </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b3) == null ? '' : jade_interp)) + " <a" + (jade.attr("href", '' + (feedbackButton) + '', true, false)) + ">View Feedback Here</a></p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b4) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b5) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b6) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b7) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b8) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b9) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b10) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b11) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p class=\"title\">" + (jade.escape((jade_interp = b12) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b13) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p class=\"title\">" + (jade.escape((jade_interp = b14) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b15) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p class=\"title\">" + (jade.escape((jade_interp = b16) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b17) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p class=\"title\">" + (jade.escape((jade_interp = b18) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b19) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p class=\"title\">" + (jade.escape((jade_interp = b20) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b21) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p class=\"title\">" + (jade.escape((jade_interp = b22) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b23) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p class=\"title\">" + (jade.escape((jade_interp = b24) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b25) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p class=\"title\">" + (jade.escape((jade_interp = b26) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b27) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p class=\"title\">" + (jade.escape((jade_interp = b28) == null ? '' : jade_interp)) + " </p>\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (jade.escape((jade_interp = b29) == null ? '' : jade_interp)) + " </p>\n");
buf.push.apply(buf, jade_indent);
buf.push("</div>");
};


















buf.push("<!DOCTYPE html>\n<html>\n  <head>\n    <link rel=\"stylesheet\" text=\"text/css\" href=\"stylesheets/frame.css\">\n  </head>\n  <body>");
jade_indent.push('    ');
jade_mixins["single"]('example1');
jade_indent.pop();
buf.push("\n  </body>\n</html>");}.call(this,"logo" in locals_for_with?locals_for_with.logo:typeof logo!=="undefined"?logo:undefined,"book" in locals_for_with?locals_for_with.book:typeof book!=="undefined"?book:undefined,"welcomeTextTitle" in locals_for_with?locals_for_with.welcomeTextTitle:typeof welcomeTextTitle!=="undefined"?welcomeTextTitle:undefined,"welcomeTextBody" in locals_for_with?locals_for_with.welcomeTextBody:typeof welcomeTextBody!=="undefined"?welcomeTextBody:undefined,"yqzplug" in locals_for_with?locals_for_with.yqzplug:typeof yqzplug!=="undefined"?yqzplug:undefined,"yqzother" in locals_for_with?locals_for_with.yqzother:typeof yqzother!=="undefined"?yqzother:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"subtitle" in locals_for_with?locals_for_with.subtitle:typeof subtitle!=="undefined"?subtitle:undefined,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined,"pics" in locals_for_with?locals_for_with.pics:typeof pics!=="undefined"?pics:undefined,"facts" in locals_for_with?locals_for_with.facts:typeof facts!=="undefined"?facts:undefined,"years" in locals_for_with?locals_for_with.years:typeof years!=="undefined"?years:undefined,"applet" in locals_for_with?locals_for_with.applet:typeof applet!=="undefined"?applet:undefined,"b1" in locals_for_with?locals_for_with.b1:typeof b1!=="undefined"?b1:undefined,"b2" in locals_for_with?locals_for_with.b2:typeof b2!=="undefined"?b2:undefined,"b3" in locals_for_with?locals_for_with.b3:typeof b3!=="undefined"?b3:undefined,"feedbackButton" in locals_for_with?locals_for_with.feedbackButton:typeof feedbackButton!=="undefined"?feedbackButton:undefined,"b4" in locals_for_with?locals_for_with.b4:typeof b4!=="undefined"?b4:undefined,"b5" in locals_for_with?locals_for_with.b5:typeof b5!=="undefined"?b5:undefined,"b6" in locals_for_with?locals_for_with.b6:typeof b6!=="undefined"?b6:undefined,"b7" in locals_for_with?locals_for_with.b7:typeof b7!=="undefined"?b7:undefined,"b8" in locals_for_with?locals_for_with.b8:typeof b8!=="undefined"?b8:undefined,"b9" in locals_for_with?locals_for_with.b9:typeof b9!=="undefined"?b9:undefined,"b10" in locals_for_with?locals_for_with.b10:typeof b10!=="undefined"?b10:undefined,"b11" in locals_for_with?locals_for_with.b11:typeof b11!=="undefined"?b11:undefined,"b12" in locals_for_with?locals_for_with.b12:typeof b12!=="undefined"?b12:undefined,"b13" in locals_for_with?locals_for_with.b13:typeof b13!=="undefined"?b13:undefined,"b14" in locals_for_with?locals_for_with.b14:typeof b14!=="undefined"?b14:undefined,"b15" in locals_for_with?locals_for_with.b15:typeof b15!=="undefined"?b15:undefined,"b16" in locals_for_with?locals_for_with.b16:typeof b16!=="undefined"?b16:undefined,"b17" in locals_for_with?locals_for_with.b17:typeof b17!=="undefined"?b17:undefined,"b18" in locals_for_with?locals_for_with.b18:typeof b18!=="undefined"?b18:undefined,"b19" in locals_for_with?locals_for_with.b19:typeof b19!=="undefined"?b19:undefined,"b20" in locals_for_with?locals_for_with.b20:typeof b20!=="undefined"?b20:undefined,"b21" in locals_for_with?locals_for_with.b21:typeof b21!=="undefined"?b21:undefined,"b22" in locals_for_with?locals_for_with.b22:typeof b22!=="undefined"?b22:undefined,"b23" in locals_for_with?locals_for_with.b23:typeof b23!=="undefined"?b23:undefined,"b24" in locals_for_with?locals_for_with.b24:typeof b24!=="undefined"?b24:undefined,"b25" in locals_for_with?locals_for_with.b25:typeof b25!=="undefined"?b25:undefined,"b26" in locals_for_with?locals_for_with.b26:typeof b26!=="undefined"?b26:undefined,"b27" in locals_for_with?locals_for_with.b27:typeof b27!=="undefined"?b27:undefined,"b28" in locals_for_with?locals_for_with.b28:typeof b28!=="undefined"?b28:undefined,"b29" in locals_for_with?locals_for_with.b29:typeof b29!=="undefined"?b29:undefined));;return buf.join("");
}
