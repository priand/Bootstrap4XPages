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

package org.openntf.xsp.bootstrap.resources;



/**
 * Bootstrap v2.3.1 resources.
 * 
 * @author priand
 */
public class Bootstrap231Resources extends BootstrapResources {
	
    public static final Bootstrap231Resources instance = new Bootstrap231Resources();

    public Bootstrap231Resources() {
    }

    @Override
	public boolean isBootstrap2() {
    	return true;
    }
}
