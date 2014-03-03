/*
 * File: app/view/InformationPanel.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('EmailPrototype.view.InformationPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.informationpanel',

    requires: [
        'Ext.panel.Panel',
        'Ext.panel.Tool'
    ],

    width: 200,
    layout: 'accordion',
    title: 'Information',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    itemId: 'properties',
                    collapseFirst: false,
                    title: 'Properties',
                    tools: [
                        {
                            xtype: 'tool',
                            type: 'maximize'
                        },
                        {
                            xtype: 'tool',
                            type: 'gear'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    html: 'No related messages',
                    itemId: 'relates',
                    collapseFirst: false,
                    title: 'Related',
                    tools: [
                        {
                            xtype: 'tool',
                            type: 'maximize'
                        },
                        {
                            xtype: 'tool',
                            type: 'gear'
                        }
                    ]
                }
            ],
            tools: [
                {
                    xtype: 'tool',
                    type: 'gear'
                }
            ]
        });

        me.callParent(arguments);
    }

});