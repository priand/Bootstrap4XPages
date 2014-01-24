/*
* � Copyright IBM Corp. 2010
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at:
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
* implied. See the License for the specific language governing
* permissions and limitations under the License.
*/
dojo.provide("extlib.dijit.BootstrapTooltip");

dojo.require("extlib.dijit.Tooltip")

//dijit.Tooltip._MasterTooltip.templateString = dojo.cache("extlib.dijit", "templates/BootstrapTooltip.html");

// Big hack here as changing the template to tooltip is not easy
// Dojo uses a singleton with the template assign to it.
// Not that we are also loosing the arrows here
dojo.declare(
	'extlib.dijit.BootstrapTooltip',
	[dijit.Tooltip],
	{
	    onShow: function () {
	    	this.inherited(arguments);
	        // Add custom class to the tooltip
	        dojo.attr(dijit.Tooltip._masterTT.domNode, 'class', 'tooltip right in');
	        dojo.attr(dijit.Tooltip._masterTT.domNode.firstChild, 'class', 'tooltip-inner');
	        dojo.attr(dijit.Tooltip._masterTT.domNode.childNodes, 'class', 'tooltip-arrow');
	      },	
	   	}
);

dojo.declare(
	'extlib.dijit.BootstrapDynamicTooltip',
	[extlib.dijit.Tooltip],
	{
	    onShow: function () {
	    	this.inherited(arguments);
	        // Add custom class to the tooltip
	        dojo.attr(dijit.Tooltip._masterTT.domNode, 'class', 'tooltip');
	        dojo.attr(dijit.Tooltip._masterTT.domNode.firstChild, 'class', 'tooltip-inner');
	        dojo.attr(dijit.Tooltip._masterTT.domNode.childNodes, 'class', 'tooltip-arrow');
	      },	
	   	}
);