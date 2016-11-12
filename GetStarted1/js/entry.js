/**
 * Created by jacoblo on 11/10/16.
 */
document.write("<h1>It works</h1><p></p>\n");
require("./../css/style2.css");
require("./../css/style1.css");
document.write(require("./content.js"));

if (__DEV__)
{
    document.write(new date());
}