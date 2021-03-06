/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
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

Ext.define('MyApp.view.MainView', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.XTemplate'
    ],

    id: 'mainView',
    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    itemId: 'mainPanel',
                    resizable: false,
                    layout: {
                        type: 'border'
                    },
                    collapsed: false,
                    manageHeight: false,
                    title: 'My Records',
                    items: [
                        {
                            xtype: 'gridpanel',
                            flex: 1,
                            region: 'west',
                            split: true,
                            id: '',
                            itemId: 'gridPanel',
                            width: 150,
                            resizable: false,
                            bodyBorder: false,
                            forceFit: true,
                            store: 'Records',
                            columns: [
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'id',
                                    text: 'ID',
                                    format: '0'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'title',
                                    text: 'Title',
                                    editor: {
                                        xtype: 'textfield'
                                    }
                                },
                                {
                                    xtype: 'datecolumn',
                                    dataIndex: 'date',
                                    text: 'Date',
                                    editor: {
                                        xtype: 'datefield'
                                    }
                                },
                                {
                                    xtype: 'booleancolumn',
                                    dataIndex: 'isFeatured',
                                    text: 'Is Featured',
                                    editor: {
                                        xtype: 'checkboxfield'
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            flex: 1,
                            region: 'center',
                            split: true,
                            data: {
                                
                            },
                            itemId: 'detailsPanel',
                            tpl: [
                                '<tpl if="values.id">',
                                '    <h1>{title}</h1>',
                                '    <p>',
                                '        {description}',
                                '    </p>',
                                '</tpl>',
                                '',
                                '<tpl if="!values.id">',
                                '    <h1>Please select a record</h1>',
                                '</tpl>'
                            ],
                            resizable: false,
                            layout: {
                                type: 'fit'
                            },
                            bodyBorder: false,
                            bodyPadding: '10 10 10 10',
                            manageHeight: false
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});