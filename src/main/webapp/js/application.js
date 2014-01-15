(function () {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["core/confirmation_dialog.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        this.merge(e, a.helpers);
        return '<div class="
        -dialog">\n  <div class="modal-content">\n    <div class="modal-header">\n      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n      <h3 class="windowTitle">Confirmation</h3>\n    </div>\n    <div class="modal-body">\n      <p>Are you sure?</p>\n    </div>\n    <div class="modal-footer">\n      <a href="#" class="btn btn-white cancelButton">Cancel</a>\n      <a href="#" class="btn btn-primary okButton">OK</a>\n    </div>\n  </div>\n</div>\n'
    });
    Handlebars.templates["charts/chart.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var f = this.escapeExpression;
        a = '<div id="label-';
        (c = e.divId) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.divId, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '" class="smallTimeLineChartLabel text-center"></div>\n<div id="';
        (c = e.divId) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.divId, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        return a += f(c) +
            '" class="chart"></div>\n'
    });
    Handlebars.templates["charts/chartEpochControls.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, b) {
            return " active"
        }

        function g(a, b) {
            return "checked"
        }

        function h(a, b) {
            var c, d;
            c = '\n                    <li><a class="timeZoneSelect" href="#" data-id="';
            (d = e.id) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.id, d = typeof d === p ? d.call(a, {
                hash: {},
                data: b
            }) : d);
            c += n(d) + '">';
            (d = e.display) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.display, d = typeof d === p ? d.call(a, {
                hash: {},
                data: b
            }) : d);
            return c +=
                n(d) + "</a></li>\n                    "
        }

        function l(a, b) {
            return '\n                <div class="pull-right">\n                    <span class="label label-no-bg light tip" title="Export entire page of charts to PDF or PNG format.">Export</span>\n                    <div class="btn-group btn-group-xs">\n                        <button type="button" class="btn-export-host-charts btn btn-default" data-format="pdf">PDF</button>\n                        <button type="button" class="btn-export-host-charts btn btn-default" data-format="png">PNG</button>\n                    </div>\n                </div>\n                '
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var k = this,
            p = "function",
            n = this.escapeExpression;
        a = '<div class="row">\n    <div class="col-sm-12">\n        <div class="chart-controls">\n            <span class="label label-no-bg light">Granularity</span>\n            <div id="chartEpochButtons" class="btn-group btn-group-xs" data-toggle="buttons">\n                <label class="btn';
        if ((c = e["if"].call(b, b && b.isEpochTypeMinute, {
            hash: {},
            inverse: k.noop,
            fn: k.program(1, f, d),
            data: d
        })) ||
            0 === c) a += c;
        a += '">\n                    <input type="radio" value="minute" data-nav="chartMinute"/>1 min\n                </label>\n                <label class="btn';
        if ((c = e["if"].call(b, b && b.isEpochType5Minute, {
            hash: {},
            inverse: k.noop,
            fn: k.program(1, f, d),
            data: d
        })) || 0 === c) a += c;
        a += '">\n                    <input type="radio" value="5minute" data-nav="chart5Minute"/>5 min\n                </label>\n                <label class="btn';
        if ((c = e["if"].call(b, b && b.isEpochTypeHourly, {
            hash: {},
            inverse: k.noop,
            fn: k.program(1, f, d),
            data: d
        })) || 0 === c) a += c;
        a += '">\n                    <input type="radio" value="hourly" data-nav="chartHour"/>1 hr\n                </label>\n                <label class="btn';
        if ((c = e["if"].call(b, b && b.isEpochTypeDaily, {
            hash: {},
            inverse: k.noop,
            fn: k.program(1, f, d),
            data: d
        })) || 0 === c) a += c;
        a += '">\n                    <input type="radio" value="daily" data-nav="chartDay"/>1 day\n                </label>\n            </div>\n\n            ';
        if ((c = e["if"].call(b, b && b.isEpochTypeMinute, {
            hash: {},
            inverse: k.noop,
            fn: k.program(3, function (a, b) {
                var c, d;
                c = '\n            <span class="label label-no-bg light">Zoom</span>\n            <div id="chartWindowButtons" class="btn-group btn-group-xs" data-toggle="buttons">\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowMinute1Hour, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="minute-1hour" data-nav="chartLinkMinuteOneHour"/>1 hr\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowMinute6Hour, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="minute-6hour" data-nav="chartLinkMinuteSixHours"/>6 hr\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowMinute12Hour, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="minute-12hour" data-nav="chartLinkMinuteTwelveHours"/>12 hr\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowMinute24Hour, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                return c + '">\n                    <input type="radio" value="minute-24hour" data-nav="chartMinuteOneDay"/>24 hr\n                </label>\n            </div>\n            '
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += "\n\n            ";
        if ((c = e["if"].call(b, b && b.isEpochType5Minute, {
            hash: {},
            inverse: k.noop,
            fn: k.program(5, function (a, b) {
                var c, d;
                c = '\n            <span class="label label-no-bg light">Zoom</span>\n            <div id="chartWindowButtons" class="btn-group btn-group-xs" data-toggle="buttons">\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindow5Minute6Hour, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="5minute-6hour" data-nav="chartLink5MinuteSixHours"/>6 hr\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindow5Minute12Hour, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="5minute-12hour" data-nav="chartLink5MinuteTwelveHours"/>12 hr\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindow5Minute24Hour, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="5minute-24hour" data-nav="chartLink5MinuteTwentyFourHours"/>24 hr\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindow5Minute48Hour, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                return c + '">\n                    <input type="radio" value="5minute-48hour" data-nav="chartLink5MinuteFortyEightHours"/>48 hr\n                </label>\n            </div>\n            '
            },
                d),
            data: d
        })) || 0 === c) a += c;
        a += "\n\n            ";
        if ((c = e["if"].call(b, b && b.isEpochTypeHourly, {
            hash: {},
            inverse: k.noop,
            fn: k.program(7, function (a, b) {
                var c, d;
                c = '\n            <span class="label label-no-bg light">Zoom</span>\n            <div id="chartWindowButtons" class="btn-group btn-group-xs" data-toggle="buttons">\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowHour1Day, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="hour-1day" data-nav="chartLinkHourOneDay"/>1 day\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowHour1Week, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="hour-1week" data-nav="chartLinkHourOneWeek"/>1 wk\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowHour2Week, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="hour-2week" data-nav="chartLinkHourTwoWeeks"/>2 wk\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowHour1Month, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="hour-1month" data-nav="chartLinkHourOneMonth"/>1 mo\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowHour2Month, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                return c + '">\n                    <input type="radio" value="hour-2month" data-nav="chartLinkHourTwoMonths"/>2 mo\n                </label>\n            </div>\n            '
            },
                d),
            data: d
        })) || 0 === c) a += c;
        a += "\n\n            ";
        if ((c = e["if"].call(b, b && b.isEpochTypeDaily, {
            hash: {},
            inverse: k.noop,
            fn: k.program(9, function (a, b) {
                var c, d;
                c = '\n            <span class="label label-no-bg light">Zoom</span>\n            <div id="chartWindowButtons" class="btn-group btn-group-xs" data-toggle="buttons">\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowDay1Week, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="day-week" data-nav="chartWeek"/>1 wk\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowDay2Week, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="day-2week" data-nav="chart2Week"/>2 wk\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowDay1Month, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="day-month" data-nav="chartMonth"/>1 mo\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowDay6Month, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="day-6month" data-nav="chart6Month"/>6 mo\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowDay1Year, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '">\n                    <input type="radio" value="day-year" data-nav="chartYear"/>1 yr\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isChartWindowRange, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, b),
                    data: b
                })) || 0 === d) c += d;
                return c + '">\n                    <input type="radio" value="range" data-nav="chartRange"/>custom\n                </label>\n            </div>\n            '
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += "\n\n            ";
        if ((c = e["if"].call(b, b && b.isChartWindowRange, {
            hash: {},
            inverse: k.noop,
            fn: k.program(11, function (a, c) {
                return '\n            <div class="custom-date-range form-inline">\n                <label for="chartRangeDatepickerStart" class="caption">from</label>\n                <input type="text" class="form-control input-sm" id="chartRangeDatepickerStart" />\n                <label for="chartRangeDatepickerEnd" class="caption">to</label>\n                <input type="text" class="form-control input-sm" id="chartRangeDatepickerEnd" />\n            </div>\n            '
            },
                d),
            data: d
        })) || 0 === c) a += c;
        a += '\n\n            <small><a data-target="#" id="showHideAdvancedControls">\n            ';
        if ((c = e["if"].call(b, b && b.showAdvancedControls, {
            hash: {},
            inverse: k.program(15, function (a, c) {
                return "\n            show additional controls\n            "
            }, d),
            fn: k.program(13, function (a, c) {
                return "\n            hide additional controls\n            "
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += "\n            </a></small>\n        </div>\n    </div>\n</div>\n\n";
        if ((c = e["if"].call(b, b && b.showAdvancedControls, {
            hash: {},
            inverse: k.noop,
            fn: k.program(17, function (a, c) {
                var b, d;
                b = '\n    <div class="row" id="advancedChartControls">\n        <div class="col-sm-12">\n            <div class="chart-controls">\n                <span class="label label-no-bg light tip" title="Plot the average value per second or the total value.">Display</span>\n                <div id="chartDisplayTypeButtons" class="btn-group btn-group-xs" data-toggle="buttons">\n                    <label class="btn';
                if ((d = e["if"].call(a, a && a.isDisplayTypeAverage, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, c),
                    data: c
                })) || 0 === d) b += d;
                b += '">\n                    <input type="radio" value="avg"/>avg/sec\n                </label>\n                <label class="btn';
                if ((d = e["if"].call(a, a && a.isDisplayTypeTotal, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(1, f, c),
                    data: c
                })) || 0 === d) b += d;
                b += '">\n                    <input type="radio" value="total"/>total\n                </label>\n                </div>\n\n                <label>\n                    <span class="label label-no-bg light tip" title="Toggle chart auto-refresh. When enabled charts will auto-refresh every minute.">Auto-Refresh</span>\n                    <input id="autoRefreshCheckbox" type="checkbox" ';
                if ((d = e["if"].call(a, a && a.shouldRefresh, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(18, g, c),
                    data: c
                })) || 0 === d) b += d;
                b += '>\n                </label>\n\n                <span class="label label-no-bg light tip" style="margin-left:10px;" title="Toggle between the group timezone and UTC for chart display. This setting does not change the group timezone.">Chart Timezone</span>\n                <div class="dropdown">\n                  <a class="btn btn-xs" data-toggle="dropdown" data-target="#">';
                (d = e.selectedTimeZone) ?
                    d = d.call(a, {
                    hash: {},
                    data: c
                }) : (d = a && a.selectedTimeZone, d = typeof d === p ? d.call(a, {
                    hash: {},
                    data: c
                }) : d);
                b += n(d) + ' <i class="icon-caret-down"></i></a>\n                  <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">\n                    ';
                if ((d = e.each.call(a, a && a.timeZoneValues, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(20, h, c),
                    data: c
                })) || 0 === d) b += d;
                b += "\n                  </ul>\n                </div>\n\n                ";
                if ((d = e["if"].call(a, a && a.chartExportSupported, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(22, l, c),
                    data: c
                })) || 0 === d) b += d;
                return b + "\n            </div>\n        </div>\n    </div>\n"
            }, d),
            data: d
        })) || 0 === c) a += c;
        return a + "\n"
    });
    Handlebars.templates["charts/chart_with_header.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, c) {
            var b;
            return b = "" + ('\n            <option value="">' + q(typeof a === n ? a.apply(a) : a) + "</option>\n            ")
        }

        function g(a, c) {
            var b, d;
            b = '\n        <a href="/host/chart/';
            (d = e.hostId) ? d = d.call(a, {
                hash: {},
                data: c
            }) : (d = a && a.hostId, d = typeof d === n ? d.call(a, {
                hash: {},
                data: c
            }) : d);
            b += q(d) + '">';
            (d = e.hostname) ? d = d.call(a, {
                hash: {},
                data: c
            }) : (d = a && a.hostname, d = typeof d === n ? d.call(a, {
                hash: {},
                data: c
            }) : d);
            return b += q(d) + "</a>\n    "
        }

        function h(a, b) {
            return "\n        Grouped\n    "
        }

        function l(a, b) {
            var c, d;
            c = "&bull; ";
            (d = e.hostType) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.hostType, d = typeof d === n ? d.call(a, {
                hash: {},
                data: b
            }) : d);
            return c += q(d)
        }

        function k(a, b) {
            var c, d;
            c = "&bull; Replica Set: ";
            (d = e.rsId) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.rsId, d = typeof d === n ? d.call(a, {
                hash: {},
                data: b
            }) : d);
            return c += q(d)
        }

        function p(a, c) {
            var b, d;
            b = "&bull; Regexp: ";
            (d = e.regexp) ? d = d.call(a, {
                hash: {},
                data: c
            }) : (d = a && a.regexp, d = typeof d === n ? d.call(a, {
                hash: {},
                data: c
            }) : d);
            return b += q(d)
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var n = "function",
            q = this.escapeExpression,
            m = this;
        a = '<div class="chart-header clearfix">\n    <div class="chartName ';
        if ((c = e["if"].call(b, b && b.withSelect, {
            hash: {},
            inverse: m.noop,
            fn: m.program(1, function (a, b) {
                return "with-select"
            }, d),
            data: d
        })) || 0 === c) a +=
                c;
        a += ' tip" title="';
        (c = e.displayName) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.displayName, c = typeof c === n ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += q(c) + '">';
        (c = e.displayName) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.displayName, c = typeof c === n ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += q(c) + "</div>\n\n    ";
        if ((c = e["if"].call(b, b && b.withStatusDbSelect, {
            hash: {},
            inverse: m.noop,
            fn: m.program(3, function (a, b) {
                var c, d;
                c = '\n        <select class="hostStatusDbsSelect">\n            <option value="" selected="selected">global</option>\n            ';
                if ((d = e.each.call(a, a && a.hostDbs, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(4, f, b),
                    data: b
                })) || 0 === d) c += d;
                return c + "\n        </select>\n    "
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += "\n\n    ";
        if ((c = e["if"].call(b, b && b.withRecordStatsDbSelect, {
            hash: {},
            inverse: m.noop,
            fn: m.program(6, function (a, c) {
                var b, d;
                b = '\n        <select class="hostStatusRecordStatsDbsSelect">\n            <option value="" selected="selected">global</option>\n            ';
                if ((d = e.each.call(a, a && a.hostDbs, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(4,
                        f, c),
                    data: c
                })) || 0 === d) b += d;
                return b + "\n        </select>\n    "
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += '\n\n    <div class="dropdown pull-right">\n      <button class="btn chartButton" data-toggle="dropdown" data-target="#">\n        <i class="icon-share-alt"></i>\n      </button>\n      <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">\n        ';
        if ((c = e["if"].call(b, b && b.isDashboard, {
            hash: {},
            inverse: m.program(10, function (a, b) {
                return '\n        <li><a href="#" class="dashAddButton requiresGroupAdmin">Add to Dashboard</a></li>\n        '
            },
                d),
            fn: m.program(8, function (a, b) {
                return '\n        <li><a href="#" class="dashRemoveButton requiresGroupAdmin">Remove from Dashboard</a></li>\n        '
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += '\n        <li><a href="#" class="bookmarkChartButton">Chart Permalink</a></li>\n        <li><a href="#" class="emailChartButton">Email Chart</a></li>\n      </ul>\n    </div>\n\n    <button class="btn chartButton chartInfoButton" title=\'View Legend\'>\n        <i class="icon-info-sign"></i>\n    </button>\n    <button class="btn chartButton expandChartButton" title=\'Expand Chart\'>\n        <i class="icon-resize-full"></i>\n    </button>\n</div>\n\n<div class="chartElement"></div>\n\n';
        if ((c = e["if"].call(b, b && b.shouldShowChartFooter, {
            hash: {},
            inverse: m.noop,
            fn: m.program(12, function (a, b) {
                var c, d;
                c = '\n<div class="smallChartHostname text-center">\n    ';
                if ((d = e["if"].call(a, a && a.hostname, {
                    hash: {},
                    inverse: m.program(15, h, b),
                    fn: m.program(13, g, b),
                    data: b
                })) || 0 === d) c += d;
                c += "\n    ";
                if ((d = e["if"].call(a, a && a.hostType, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(17, l, b),
                    data: b
                })) || 0 === d) c += d;
                c += "\n    ";
                if ((d = e["if"].call(a, a && a.rsId, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(19, k, b),
                    data: b
                })) || 0 === d) c +=
                        d;
                c += "\n    ";
                if ((d = e["if"].call(a, a && a.regexp, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(21, p, b),
                    data: b
                })) || 0 === d) c += d;
                return c + "\n</div>\n"
            }, d),
            data: d
        })) || 0 === c) a += c;
        return a + "\n"
    });
    Handlebars.templates["charts/clusterChartControls.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, c) {
            return 'class="active"'
        }

        function g(a, c) {
            return "checked"
        }

        function h(a, c, b) {
            var d, f;
            d = "\n        <li class=\"shard-item list-unstyled\">\n          <i class='icon-circle' style='color:";
            (f = e.color) ? f = f.call(a, {
                hash: {},
                data: c
            }) : (f = a && a.color, f = typeof f === k ? f.call(a, {
                hash: {},
                data: c
            }) : f);
            d += p(f) + ";'></i>&nbsp;\n          <a href=\"/host/detail/" + p((f = b && b.groupId, typeof f === k ? f.apply(a) : f)) + "/";
            (b = e.hostId) ? b = b.call(a, {
                hash: {},
                data: c
            }) : (b = a && a.hostId, b = typeof b === k ? b.call(a, {
                hash: {},
                data: c
            }) : b);
            d += p(b) + '">';
            (b = e.hostname) ? b = b.call(a, {
                hash: {},
                data: c
            }) : (b = a && a.hostname, b = typeof b === k ? b.call(a, {
                hash: {},
                data: c
            }) : b);
            d += p(b) + "</a>&nbsp;\n          ";
            if ((b = e["if"].call(a, a && a.isPrimary, {
                hash: {},
                inverse: n.noop,
                fn: n.program(7,
                    l, c),
                data: c
            })) || 0 === b) d += b;
            return d + "\n        </li>\n        "
        }

        function l(a, b) {
            return '\n            <span class="label host-label-primary">PRIMARY</span>\n          '
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var k = "function",
            p = this.escapeExpression,
            n = this;
        a = '<ul class="nav nav-pills host-type-select">\n  <li ';
        if ((c = e["if"].call(b, b && b.hostTypePrimary, {
            hash: {},
            inverse: n.noop,
            fn: n.program(1, f, d),
            data: d
        })) || 0 === c) a += c;
        a += '>\n    <a type="radio">Primaries</a>\n  </li>\n  <li ';
        if ((c = e["if"].call(b, b && b.hostTypeSecondary, {
            hash: {},
            inverse: n.noop,
            fn: n.program(1, f, d),
            data: d
        })) || 0 === c) a += c;
        a += '>\n    <a type="radio">Secondaries</a>\n  </li>\n  <li ';
        if ((c = e["if"].call(b, b && b.hostTypeAll, {
            hash: {},
            inverse: n.noop,
            fn: n.program(1, f, d),
            data: d
        })) || 0 === c) a += c;
        a += '>\n    <a type="radio">All</a>\n  </li>\n</ul>\n                \n<h4>Shards</h4>\n\n<div class="panel-group">\n  ';
        if ((c = e.each.call(b, b && b.shards, {
            hash: {},
            inverse: n.noop,
            fn: n.programWithDepth(3, function (a, b, c) {
                var d, f;
                d =
                    '\n  <div class="panel panel-default">\n    <div class="panel-heading">\n      <h4 class="panel-title">\n        <label>\n          <i class=\'icon-circle\' style=\'color:';
                (f = e.color) ? f = f.call(a, {
                    hash: {},
                    data: b
                }) : (f = a && a.color, f = typeof f === k ? f.call(a, {
                    hash: {},
                    data: b
                }) : f);
                d += p(f) + ';\'></i>&nbsp;\n          <input type="checkbox" class="shardToggle" data-shardid="';
                (f = e.id) ? f = f.call(a, {
                    hash: {},
                    data: b
                }) : (f = a && a.id, f = typeof f === k ? f.call(a, {
                    hash: {},
                    data: b
                }) : f);
                d += p(f) + '" ';
                if ((f = e["if"].call(a, a && a.checked, {
                    hash: {},
                    inverse: n.noop,
                    fn: n.program(4, g, b),
                    data: b
                })) || 0 === f) d += f;
                d += '>&nbsp;\n        </label>\n        <a data-toggle="collapse" data-shardid="';
                (f = e.id) ? f = f.call(a, {
                    hash: {},
                    data: b
                }) : (f = a && a.id, f = typeof f === k ? f.call(a, {
                    hash: {},
                    data: b
                }) : f);
                d += p(f) + '" class="collapseToggle" href="#collapse-';
                (f = e.id) ? f = f.call(a, {
                    hash: {},
                    data: b
                }) : (f = a && a.id, f = typeof f === k ? f.call(a, {
                    hash: {},
                    data: b
                }) : f);
                d += p(f) + '">\n          <i id="chevron-';
                (f = e.id) ? f = f.call(a, {
                    hash: {},
                    data: b
                }) : (f = a && a.id, f = typeof f === k ? f.call(a, {
                    hash: {},
                    data: b
                }) : f);
                d += p(f) + '" class="chevron icon-chevron-right"></i>&nbsp;';
                (f = e.id) ? f = f.call(a, {
                    hash: {},
                    data: b
                }) : (f = a && a.id, f = typeof f === k ? f.call(a, {
                    hash: {},
                    data: b
                }) : f);
                d += p(f) + '\n        </a>\n      </h4>\n    </div>\n    <div id="collapse-';
                (f = e.id) ? f = f.call(a, {
                    hash: {},
                    data: b
                }) : (f = a && a.id, f = typeof f === k ? f.call(a, {
                    hash: {},
                    data: b
                }) : f);
                d += p(f) + '" class="panel-collapse collapse">\n      <div class="panel-body">\n        ';
                if ((f = e.each.call(a, a && a.hosts, {
                    hash: {},
                    inverse: n.noop,
                    fn: n.programWithDepth(6, h, b,
                        c),
                    data: b
                })) || 0 === f) d += f;
                return d + "\n      </div>\n    </div>\n  </div>\n  "
            }, d, b),
            data: d
        })) || 0 === c) a += c;
        return a + "\n</div>\n"
    });
    Handlebars.templates["charts/expanded_chart.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        this.merge(e, a.helpers);
        return '<div id="chartDetailLabel"></div>\n<div class="row">\n  <div class="col-md-8">\n    <div class="chartElement"></div>\n  </div>\n  <div class="col-md-4">\n    <div id="chartInfo"></div>\n  </div>\n</div>\n'
    });
    Handlebars.templates["activity/alert/alert.hbs"] =
        Handlebars.template(function (a, b, e, c, d) {
        function f(a, b) {
            var c, d;
            c = ' <em class="muted">in replica set</em> ';
            (d = e.rsId) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.rsId, d = typeof d === n ? d.call(a, {
                hash: {},
                data: b
            }) : d);
            return c += q(d)
        }

        function g(a, b) {
            var c, d;
            c = {
                hash: {},
                data: b
            };
            return c = '\n        <span class="label label-no-bg light">Last</span> ' + (q((d = e.formatDateTime || a && a.formatDateTime, d ? d.call(a, a && a.lnd, c) : r.call(a, "formatDateTime", a && a.lnd, c))) + "\n      ")
        }

        function h(a, b) {
            return '\n        \n        <span class="label label-no-bg light"></span>\n      '
        }

        function l(a, b) {
            var c, d;
            c = {
                hash: {},
                data: b
            };
            return c = '\n    <div class="pull-right" style="text-align:right;">\n      <div class="label label-no-bg">Acknowledged Until</div>\n      <div class="timestamp" style="float:none;">' + (q((d = e.formatDateTime || a && a.formatDateTime, d ? d.call(a, a && a.ackUntil, c) : r.call(a, "formatDateTime", a && a.ackUntil, c))) + '</div>\n      <a href="#" class="alert-unacknowledge requiresGroupAdmin">Unacknowledge</a>\n    </div>\n  ')
        }

        function k(a, b) {
            return '\n    <div class="acknowledge-controls requiresGroupAdmin">\n      <span class="label label-no-bg">Acknowledge for</span>\n      <div class="btn-group">\n        <a class="alert-acknowledge btn btn-small" title="Acknowledge for 1hr" data-until="ONE_HOUR">1hr</a>\n        <a class="alert-acknowledge btn btn-small" title="Acknowledge for 6hrs" data-until="SIX_HOURS">6hrs</a>\n        <a class="alert-acknowledge btn btn-small" title="Acknowledge for 24hrs" data-until="TWENTY_FOUR_HOURS">24hrs</a>\n        <a class="alert-acknowledge btn btn-small" title="Acknowledge for forever" data-until="FOREVER">forever</a>\n      </div>\n    </div>\n  '
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var p, n = "function",
            q = this.escapeExpression,
            m = this,
            r = e.helperMissing;
        a = '<span class="type-indicator">\n  ';
        if ((c = e["if"].call(b, b && b.isOpen, {
            hash: {},
            inverse: m.program(3, function (a, b) {
                return '\n    <i class="icon-ok icon-large text-success"></i> \n  '
            }, d),
            fn: m.program(1, function (a, b) {
                return '\n    <i class="icon-warning-sign icon-large text-error"></i> \n  '
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += '\n</span>\n<div class="event-description">\n  <strong>\n    ';
        (c = e._t) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b._t, c = typeof c === n ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += q(c) + " ";
        (c = e.description) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.description, c = typeof c === n ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += q(c) + '\n  </strong><br>\n  <a href="';
        (c = e.targetLink) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.targetLink, c = typeof c === n ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += q(c) + '">';
        (c = e.targetName) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.targetName, c = typeof c === n ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += q(c) + "</a>\n  ";
        if ((c = e["if"].call(b, b && b.isForHost, {
            hash: {},
            inverse: m.noop,
            fn: m.program(5, function (a, b) {
                var c;
                return (c = e["if"].call(a, a && a.rsId, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(6, f, b),
                    data: b
                })) || 0 === c ? c : ""
            }, d),
            data: d
        })) || 0 === c) a += c;
        p = {
            hash: {},
            data: d
        };
        a = a + '\n  <div class="meta">\n    <span class="label label-no-bg light">Created</span> ' + (q((c = e.formatDateTime || b && b.formatDateTime, c ? c.call(b, b && b.cre, p) : r.call(b, "formatDateTime", b && b.cre, p))) + "\n    ");
        if ((c = e["if"].call(b, b && b.isOpen, {
            hash: {},
            inverse: m.program(13, function (a, b) {
                var c, d;
                c = {
                    hash: {},
                    data: b
                };
                return c = '\n      <span class="label label-no-bg light">Closed</span> ' + (q((d = e.formatDateTime || a && a.formatDateTime, d ? d.call(a, a && a.res, c) : r.call(a, "formatDateTime", a && a.res, c))) + "\n    ")
            }, d),
            fn: m.program(8, function (a, b) {
                var c, d;
                c = "\n      ";
                if ((d = e["if"].call(a, a && a.lnd, {
                    hash: {},
                    inverse: m.program(11, h, b),
                    fn: m.program(9, g, b),
                    data: b
                })) || 0 === d) c += d;
                return c + "\n    "
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += "\n  </div>\n</div>\n";
        if ((c = e["if"].call(b, b && b.isOpen, {
            hash: {},
            inverse: m.noop,
            fn: m.program(15, function (a, b) {
                var c, d;
                c = "\n  ";
                if ((d = e["if"].call(a, a && a.isAcknowledged, {
                    hash: {},
                    inverse: m.program(18, k, b),
                    fn: m.program(16, l, b),
                    data: b
                })) || 0 === d) c += d;
                return c + "\n"
            }, d),
            data: d
        })) || 0 === c) a += c;
        return a += "\n"
    });
    Handlebars.templates["activity/alert/metric_alert.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, b) {
            var c, d;
            c = ' <em class="muted">in replica set</em> ';
            (d = e.rsId) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.rsId, d = typeof d === n ? d.call(a, {
                hash: {},
                data: b
            }) : d);
            return c +=
                q(d)
        }

        function g(a, b) {
            var c, d;
            c = {
                hash: {},
                data: b
            };
            return c = '\n        <span class="label label-no-bg light">Last</span> ' + (q((d = e.formatDateTime || a && a.formatDateTime, d ? d.call(a, a && a.lnd, c) : r.call(a, "formatDateTime", a && a.lnd, c))) + "\n      ")
        }

        function h(a, b) {
            return '\n        \n        <span class="label label-no-bg light"></span>\n      '
        }

        function l(a, b) {
            var c, d;
            c = {
                hash: {},
                data: b
            };
            return c = '\n    <div class="pull-right" style="text-align:right;">\n      <div class="label label-no-bg">Acknowledged Until</div>\n      <div class="timestamp" style="float:none;">' +
                (q((d = e.formatDateTime || a && a.formatDateTime, d ? d.call(a, a && a.ackUntil, c) : r.call(a, "formatDateTime", a && a.ackUntil, c))) + '</div>\n      <a href="#" class="alert-unacknowledge requiresGroupAdmin">Unacknowledge</a>\n    </div>\n  ')
        }

        function k(a, b) {
            return '\n    <div class="acknowledge-controls requiresGroupAdmin">\n      <span class="label label-no-bg">Acknowledge for</span>\n      <div class="btn-group">\n        <a class="alert-acknowledge btn btn-small" title="Acknowledge for 1hr" data-until="ONE_HOUR">1hr</a>\n        <a class="alert-acknowledge btn btn-small" title="Acknowledge for 6hrs" data-until="SIX_HOURS">6hrs</a>\n        <a class="alert-acknowledge btn btn-small" title="Acknowledge for 24hrs" data-until="TWENTY_FOUR_HOURS">24hrs</a>\n        <a class="alert-acknowledge btn btn-small" title="Acknowledge for forever" data-until="FOREVER">forever</a>\n      </div>\n    </div>\n  '
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var p, n = "function",
            q = this.escapeExpression,
            m = this,
            r = e.helperMissing;
        a = '<span class="type-indicator">\n  ';
        if ((c = e["if"].call(b, b && b.isOpen, {
            hash: {},
            inverse: m.program(3, function (a, b) {
                return '\n    <i class="icon-ok icon-large text-success"></i> \n  '
            }, d),
            fn: m.program(1, function (a, b) {
                return '\n    <i class="icon-warning-sign icon-large text-error"></i> \n  '
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += ' \n</span>\n<div class="event-description">\n  <strong title="';
        (c = e.metric) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.metric, c = typeof c === n ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += q(c) + " Sample: ";
        (c = e.cv) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.cv, c = typeof c === n ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += q(c) + '">';
        (c = e.metric) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.metric, c = typeof c === n ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += q(c) + " ";
        (c = e.description) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.description, c = typeof c === n ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += q(c) + '\n  </strong> <em class="metric-mode">(';
        (c = e.mode) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.mode, c = typeof c === n ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += q(c) + ')</em><br>\n  <a href="';
        (c = e.targetLink) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.targetLink, c = typeof c === n ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += q(c) + '">';
        (c = e.targetName) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.targetName, c = typeof c === n ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += q(c) + "</a>\n  ";
        if ((c = e["if"].call(b, b && b.isForHost, {
            hash: {},
            inverse: m.noop,
            fn: m.program(5, function (a, b) {
                var c;
                return (c = e["if"].call(a,
                    a && a.rsId, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(6, f, b),
                    data: b
                })) || 0 === c ? c : ""
            }, d),
            data: d
        })) || 0 === c) a += c;
        p = {
            hash: {},
            data: d
        };
        a = a + '\n  <div class="meta">\n    <span class="label label-no-bg light">Created</span> ' + (q((c = e.formatDateTime || b && b.formatDateTime, c ? c.call(b, b && b.cre, p) : r.call(b, "formatDateTime", b && b.cre, p))) + "\n    ");
        if ((c = e["if"].call(b, b && b.isOpen, {
            hash: {},
            inverse: m.program(13, function (a, b) {
                var c, d;
                c = {
                    hash: {},
                    data: b
                };
                return c = '\n      <span class="label label-no-bg light">Closed</span> ' +
                    (q((d = e.formatDateTime || a && a.formatDateTime, d ? d.call(a, a && a.res, c) : r.call(a, "formatDateTime", a && a.res, c))) + "\n    ")
            }, d),
            fn: m.program(8, function (a, b) {
                var c, d;
                c = "\n      ";
                if ((d = e["if"].call(a, a && a.lnd, {
                    hash: {},
                    inverse: m.program(11, h, b),
                    fn: m.program(9, g, b),
                    data: b
                })) || 0 === d) c += d;
                return c + "\n    "
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += "\n  </div>\n</div>\n";
        if ((c = e["if"].call(b, b && b.isOpen, {
            hash: {},
            inverse: m.noop,
            fn: m.program(15, function (a, b) {
                var c, d;
                c = "\n  ";
                if ((d = e["if"].call(a, a && a.isAcknowledged, {
                    hash: {},
                    inverse: m.program(18, k, b),
                    fn: m.program(16, l, b),
                    data: b
                })) || 0 === d) c += d;
                return c + "\n"
            }, d),
            data: d
        })) || 0 === c) a += c;
        return a += "\n"
    });
    Handlebars.templates["activity/alertConfig/alert_config_display.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, b) {
            var c, d;
            c = "\n    <li>\n      <em>";
            if ((d = e["if"].call(a, null == b || !1 === b ? b : b.index, {
                hash: {},
                inverse: k.noop,
                fn: k.program(13, g, b),
                data: b
            })) || 0 === d) c += d;
            c += "</em>\n      ";
            (d = e.field) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.field, d = typeof d === h ? d.call(a, {
                hash: {},
                data: b
            }) : d);
            c += l(d) + " <em>";
            (d = e.op) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.op, d = typeof d === h ? d.call(a, {
                hash: {},
                data: b
            }) : d);
            c += l(d) + "</em> <strong>'";
            (d = e.value) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.value, d = typeof d === h ? d.call(a, {
                hash: {},
                data: b
            }) : d);
            return c += l(d) + "'</strong>\n    </li>\n    "
        }

        function g(a, b) {
            return "and "
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var h = "function",
            l = this.escapeExpression,
            k = this;
        a = '<div class="alert-config-heading clearfix"> \n\n  <div class="alert-trigger">\n    <span class="target-type"><strong>';
        (c = e._t) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b._t, c = typeof c === h ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += l(c) + "</strong>\n    ";
        if ((c = e["if"].call(b, b && b.ofHostType, {
            hash: {},
            inverse: k.noop,
            fn: k.program(1, function (a, b) {
                var c, d;
                c = "\n      <em>";
                (d = e.ofHostType) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.ofHostType, d = typeof d === h ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                return c += l(d) + "</em>\n    "
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += "\n    </span>\n    ";
        if ((c = e["if"].call(b, b && b.mt, {
            hash: {},
            inverse: k.program(5, function (a, b) {
                var c,
                    d;
                c = "\n      <strong>";
                (d = e.displayType) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.displayType, d = typeof d === h ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += l(d) + " ";
                (d = e.et) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.et, d = typeof d === h ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                return c += l(d) + "</strong>\n    "
            }, d),
            fn: k.program(3, function (a, b) {
                var c, d;
                return c = "" + ("\n      <strong>" + l((d = (d = a && a.mt, null == d || !1 === d ? d : d.metric), typeof d === h ? d.apply(a) : d)) + " <em>" + l((d = (d = a && a.mt, null == d || !1 === d ? d : d.op), typeof d === h ? d.apply(a) : d)) + "</em> " +
                    l((d = (d = a && a.mt, null == d || !1 === d ? d : d.threshold), typeof d === h ? d.apply(a) : d)) + " " + l((d = (d = a && a.mt, null == d || !1 === d ? d : d.units), typeof d === h ? d.apply(a) : d)) + '</strong> <em class="metric-mode">(' + l((d = (d = a && a.mt, null == d || !1 === d ? d : d.mode), typeof d === h ? d.apply(a) : d)) + ")</em>\n    ")
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += '\n  </div>\n  \n  <div class="dropdown alert-actions requiresGroupAdmin">\n    <a class="btn btn-white dropdown-toggle" data-toggle="dropdown" href="#"><i class="icon-gear icon-large"></i> <i class="icon-caret-down"></i></a>\n    <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dLabel">\n      <li><a href="#" class="alert-edit-link">Edit</a></li>\n      <li><a href="#" class="alert-clone-link">Clone</a></li>\n      ';
        if ((c = e["if"].call(b, b && b.enabled, {
            hash: {},
            inverse: k.program(9, function (a, b) {
                return '\n        <li><a href="#" class="alert-enable-link">Enable</a></li>\n      '
            }, d),
            fn: k.program(7, function (a, b) {
                return '\n        <li><a href="#" class="alert-disable-link">Disable</a></li>\n      '
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += '\n      <li><a href="#" class="alert-delete-link">Delete</a></li>\n    </ul>\n  </div>\n</div>\n\n';
        if ((c = e["if"].call(b, b && b.matchers, {
            hash: {},
            inverse: k.noop,
            fn: k.program(11, function (a, b) {
                var c,
                    d;
                c = '\n  <ul class="alert-targets">\n    <li class="label label-no-bg light">where</li>\n    ';
                if ((d = e.each.call(a, a && a.matchers, {
                    hash: {},
                    inverse: k.noop,
                    fn: k.program(12, f, b),
                    data: b
                })) || 0 === d) c += d;
                return c + "\n  </ul>\n"
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += '\n\n<table class="table table-condensed alert-recipients">\n  <thead>\n    <tr>\n      <th>Send to</th>\n      <th>Frequency</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    ';
        if ((c = e.each.call(b, b && b.notify, {
            hash: {},
            inverse: k.noop,
            fn: k.program(15, function (a,
                b) {
                var c, d;
                c = '\n    <tr>\n      <td class="recipient"><i class="';
                (d = e.icon) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.icon, d = typeof d === h ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += l(d) + '"></i>\n        <span class="recipient-name">';
                (d = e.name) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.name, d = typeof d === h ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += l(d) + '</span>\n      </td>\n      <td class="alert-frequency">\n        every <strong>';
                (d = e.interval) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.interval, d = typeof d === h ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += l(d) + "</strong> mins after waiting <strong>";
                (d = e.delay) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.delay, d = typeof d === h ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                return c += l(d) + "</strong> mins\n      </td>\n    </tr>\n    "
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += '\n  </tbody>\n</table>\n\n<div class="alert-status">\n    ';
        if ((c = e.unless.call(b, b && b.enabled, {
            hash: {},
            inverse: k.noop,
            fn: k.program(17, function (a, b) {
                return '<span class="label label-warning">disabled</span>'
            }, d),
            data: d
        })) || 0 === c) a += c;
        return a + "\n</div>\n"
    });
    Handlebars.templates["activity/alertConfig/alert_config_edit.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        a = '<div class="modal-dialog">\n  <div class="modal-content">\n    <div class="modal-header">\n      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n      ';
        if ((b = e["if"].call(b, b && b.id, {
            hash: {},
            inverse: this.program(3, function (a, b) {
                return "\n        <h3>Create a New Alert</h3>\n      "
            },
                d),
            fn: this.program(1, function (a, b) {
                return "\n        <h3>Edit Alert</h3>\n      "
            }, d),
            data: d
        })) || 0 === b) a += b;
        return a + '\n    </div>\n    <div class="modal-body">\n      <div class="alert alert-error jshide">\n        <i class="icon-warning-sign"></i> <span class="alert-error-msg"></span>\n      </div>\n      <div id="alertStep1"></div>\n      <div id="alertStep2"></div>\n      <div id="alertStep3"></div>\n    </div>\n    <div class="modal-footer">\n      <a href="#" id="saveAlert" class="btn btn-primary btn-lg">Save</a>\n    </div>\n  </div>\n</div>\n'
    });
    Handlebars.templates["activity/alertConfig/alert_config_step1.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        this.merge(e, a.helpers);
        return '<h4>\n  <span class="step-info"><span class="step-number">1</span>Alert if\n  </span>\n</h4>\n'
    });
    Handlebars.templates["activity/alertConfig/alert_config_step2.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        this.merge(e, a.helpers);
        return '<h4>\n  <span class="step-info"><span class="step-number">2</span>For\n    <span id="matcherSelector"/>\n  </span>\n</h4>\n\n<div id="matcherCollection"></div>\n<div id="filterResults"></div>\n'
    });
    Handlebars.templates["activity/alertConfig/alert_config_step3.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        a = '<h4>\n  <span class="step-info"><span class="step-number">3</span>Send to\n  </span>\n</h4>\n<div id="alert-notifications"></div>\n<div class="dropdown">\n  <a class="btn btn-white dropdown-toggle" data-toggle="dropdown" href="#">Add <i class="icon-caret-down"></i></a>\n  <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">\n    <li><a href="#" class="add-alert-notification" data-type="GROUP">MMS Group</a></li>\n    <li><a href="#" class="add-alert-notification" data-type="USER">MMS User</a></li>\n    ';
        if ((b = e["if"].call(b, b && b.onPrem, {
            hash: {},
            inverse: this.noop,
            fn: this.program(1, function (a, b) {
                return '\n      <li><a href="#" class="add-alert-notification" data-type="SNMP">SNMP Host</a></li>\n    '
            }, d),
            data: d
        })) || 0 === b) a += b;
        return a + '\n    <li><a href="#" class="add-alert-notification" data-type="EMAIL">Email</a></li>\n    <li><a href="#" class="add-alert-notification" data-type="SMS">SMS</a></li>\n    <li><a href="#" class="add-alert-notification" data-type="HIP_CHAT">Hip Chat</a></li>\n  </ul>\n</div>\n'
    });
    Handlebars.templates["activity/alertConfig/filter_results.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        this.merge(e, a.helpers);
        return '<table class="table filter-preview">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Last Ping</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>LeafyPro.local:27017</td>\n      <td>Standalone</td>\n      <td>4 secs ago</td>\n    </tr>\n    <tr>\n      <td>LeafyPro.local:27017</td>\n      <td>Standalone</td>\n      <td>4 secs ago</td>\n    </tr>\n    <tr>\n      <td>LeafyPro.local:27017</td>\n      <td>Standalone</td>\n      <td>4 secs ago</td>\n    </tr>\n  </tbody>\n</table>\n'
    });
    Handlebars.templates["activity/alertConfig/group_tooltip.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, b) {
            return "Yes"
        }

        function g(a, b) {
            return "No"
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var h = this.escapeExpression,
            l = this;
        a = '<table class="group-tooltip">\n  <tr>\n    <th>Name</th>\n    <th>Email</th>\n    <th>SMS</th>\n  <tr>\n  ';
        if ((b = e.each.call(b, b && b.users, {
            hash: {},
            inverse: l.noop,
            fn: l.program(1, function (a, b) {
                var c, d;
                c = "\n    <tr>\n        <td>";
                (d = e.fn) ?
                    d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.fn, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += h(d) + " ";
                (d = e.ln) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.ln, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += h(d) + "</td>\n        <td>";
                if ((d = e["if"].call(a, a && a.pe, {
                    hash: {},
                    inverse: l.program(4, g, b),
                    fn: l.program(2, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += "</td>\n        <td>";
                if ((d = e["if"].call(a, a && a.mobileNumber, {
                    hash: {},
                    inverse: l.program(4, g, b),
                    fn: l.program(2, f, b),
                    data: b
                })) || 0 === d) c += d;
                return c + "</td>\n    </tr>\n  "
            },
                d),
            data: d
        })) || 0 === b) a += b;
        return a + "\n</table>\n"
    });
    Handlebars.templates["activity/alertConfig/matcher.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, b) {
            var c, d;
            c = '\n    <option value="';
            (d = e.value) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.value, d = typeof d === h ? d.call(a, {
                hash: {},
                data: b
            }) : d);
            c += l(d) + '"\n      ';
            if ((d = e["if"].call(a, a && a.selected, {
                hash: {},
                inverse: k.noop,
                fn: k.program(2, g, b),
                data: b
            })) || 0 === d) c += d;
            c += ">\n      ";
            (d = e.name) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.name, d = typeof d === h ?
                d.call(a, {
                hash: {},
                data: b
            }) : d);
            return c += l(d) + "</option>\n  "
        }

        function g(a, b) {
            return ' selected="true"'
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var h = "function",
            l = this.escapeExpression,
            k = this;
        a = '<select class="matcher-field form-control">\n  ';
        if ((c = e.each.call(b, b && b.fields, {
            hash: {},
            inverse: k.noop,
            fn: k.program(1, f, d),
            data: d
        })) || 0 === c) a += c;
        a += '\n</select>\n<select class="matcher-op form-control">\n  ';
        if ((c = e.each.call(b, b && b.ops, {
            hash: {},
            inverse: k.noop,
            fn: k.program(1, f, d),
            data: d
        })) || 0 === c) a += c;
        a += '\n</select>\n<input type="text" class="matcher-value form-control" value="';
        (c = e.value) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.value, c = typeof c === h ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        return a += l(c) + '">\n<div class="add-remove-buttons">\n  <a href="#" class="btn btn-circle remove-target-matcher"><i class="icon-minus"></i></a>\n  <a href="#" class="btn btn-circle add-target-matcher"><i class="icon-plus"></i></a>\n</div>\n'
    });
    Handlebars.templates["activity/alertConfig/matcher_selector.hbs"] =
        Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var f = this.escapeExpression;
        a = '<label class="radio">\n    <input type="radio" class="matcherModeRadioAny" name="matcherMode" value="any" checked>\n    Any <span id="targetSelectionAnyLabel">';
        (c = e.typeWithHost) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.typeWithHost, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '</span>\n</label>\n<label class="radio">\n    <input type="radio" class="matcherModeRadioSpecific" name="matcherMode" value="specific">\n    <span id="targetSelectionSpecificLabel">';
        (c = e.typeWithHost) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.typeWithHost, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        return a += f(c) + "</span>s where...\n</label>\n"
    });
    Handlebars.templates["activity/alertConfig/notification_email.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var f = this.escapeExpression;
        a = '<div class="recipient-type">\n  <i class="';
        (c = e.icon) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.icon, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + ' "></i>\n  <input class="form-control notification-emailAddress" type="text" placeholder="Email" value="';
        (c = e.name) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.name, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '"/>\n</div>\n<div class="alert-formats">\n</div>\n<div class="input-append input-prepend">\n  <span class="add-on add-on-plain dark">once every</span>\n  <input class="form-control notification-interval" type="text" value="';
        (c = e.interval) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.interval, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '">\n  <span class="add-on add-on-plain">mins</span>\n</div>\n<div class="input-append input-prepend">\n  <span class="add-on add-on-plain dark">after waiting</span>\n  <input class="form-control notification-delay" type="text" value="';
        (c = e.delay) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.delay, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        return a += f(c) + '">\n  <span class="add-on add-on-plain">mins</span>\n</div>\n<a href="#" class="btn btn-icon-only pull-right remove-recipient" style="margin-right: 10px;"><i class="icon-trash"></i></a>\n'
    });
    Handlebars.templates["activity/alertConfig/notification_group.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, b) {
            return ' checked="checked"'
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var g = this.escapeExpression;
        a = '<div class="recipient-type">\n  <i class="';
        (c = e.icon) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.icon, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + '"></i> <span class="group-notification-tooltip" title="">';
        (c = e.name) ? c = c.call(b, {
            hash: {},
            data: d
        }) :
            (c = b && b.name, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + '</span>\n</div>\n<div class="input-append input-prepend">\n  <span class="add-on add-on-plain dark">once every</span>\n  <input class="form-control notification-interval" type="text" value="';
        (c = e.interval) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.interval, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + '">\n  <span class="add-on add-on-plain">mins</span>\n</div>\n<div class="input-append input-prepend">\n  <span class="add-on add-on-plain dark">after waiting</span>\n  <input class="form-control notification-delay" type="text" value="';
        (c = e.delay) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.delay, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + '">\n  <span class="add-on add-on-plain">mins</span>\n</div>\n<div class="alert-formats">\n  <label class="checkbox notification-email">Email<input type="checkbox"';
        if ((c = e["if"].call(b, b && b.email, {
            hash: {},
            inverse: this.noop,
            fn: this.program(1, f, d),
            data: d
        })) || 0 === c) a += c;
        a += '></label>\n  <label class="checkbox notification-sms">SMS<input type="checkbox"';
        if ((c = e["if"].call(b, b && b.sms, {
            hash: {},
            inverse: this.noop,
            fn: this.program(1, f, d),
            data: d
        })) || 0 === c) a += c;
        return a + '></label>\n</div>\n<a href="#" class="btn btn-icon-only pull-right remove-recipient" style="margin-right: 10px;"><i class="icon-trash"></i></a>\n'
    });
    Handlebars.templates["activity/alertConfig/notification_hipchat.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var f = this.escapeExpression;
        a = '<div class="recipient-type">\n  <i class="';
        (c = e.icon) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.icon, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '"></i>\n  <input class="form-control notification-roomName" type="text" placeholder="Hip Chat Room Name" value="';
        (c = e.roomName) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.roomName, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '"/>\n</div>\n<div class="alert-formats">\n</div>\n<div class="input-append input-prepend">\n  <span class="add-on add-on-plain dark">once every</span>\n  <input class="form-control notification-interval" type="text" value="';
        (c = e.interval) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.interval, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '">\n  <span class="add-on add-on-plain">mins</span>\n</div>\n<div class="input-append input-prepend">\n  <span class="add-on add-on-plain dark">after waiting</span>\n  <input class="form-control notification-delay" type="text" value="';
        (c = e.delay) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.delay, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '">\n  <span class="add-on add-on-plain">mins</span>\n</div>\n\n<div class="auth-token">\n  <input class="form-control notification-notificationToken" type="text" placeholder="API v2 Token" value="';
        (c = e.notificationToken) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.notificationToken, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        return a += f(c) + '"/>\n</div>\n<a href="#" class="btn btn-icon-only pull-right remove-recipient" style="margin-right: 10px;"><i class="icon-trash"></i></a>\n'
    });
    Handlebars.templates["activity/alertConfig/notification_sms.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var f = this.escapeExpression;
        a = '<div class="recipient-type">\n  <i class="';
        (c = e.icon) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.icon, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '"></i>\n  <input class="form-control notification-mobileNumber" type="text" placeholder="Mobile Number" value="';
        (c = e.name) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.name, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '"/>\n</div>\n<div class="alert-formats">\n</div>\n<div class="input-append input-prepend">\n  <span class="add-on add-on-plain dark">once every</span>\n  <input class="form-control notification-interval" type="text" value="';
        (c = e.interval) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.interval, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '">\n  <span class="add-on add-on-plain">mins</span>\n</div>\n<div class="input-append input-prepend">\n  <span class="add-on add-on-plain dark">after waiting</span>\n  <input class="form-control notification-delay" type="text" value="';
        (c = e.delay) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.delay, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        return a += f(c) + '">\n  <span class="add-on add-on-plain">mins</span>\n</div>\n<a href="#" class="btn btn-icon-only pull-right remove-recipient" style="margin-right: 10px;"><i class="icon-trash"></i></a>\n'
    });
    Handlebars.templates["activity/alertConfig/notification_snmp.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var f = this.escapeExpression;
        a = '<div class="recipient-type">\n  <i class="';
        (c = e.icon) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.icon, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '"></i>\n  <div class="input-append">\n    <input class="input-small notification-snmpAddress" type="text" value="';
        (c = e.name) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.name, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '"/>\n    <span class="add-on">:161</span>\n  </div>\n</div>\n<div class="alert-formats">\n</div>\n<div class="input-append input-prepend">\n  <span class="add-on add-on-plain dark">once every</span>\n  <input class="notification-interval" type="text" value="';
        (c = e.interval) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.interval, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += f(c) + '">\n  <span class="add-on add-on-plain">mins</span>\n</div>\n<div class="input-append input-prepend">\n  <span class="add-on add-on-plain dark">after waiting</span>\n  <input class="notification-delay" type="text" value="';
        (c = e.delay) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.delay, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        return a += f(c) + '">\n  <span class="add-on add-on-plain">mins</span>\n</div>\n<a href="#" class="btn btn-icon-only pull-right remove-recipient" style="margin-right: 10px;"><i class="icon-trash"></i></a>\n'
    });
    Handlebars.templates["activity/alertConfig/notification_user.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, b) {
            return ' checked="checked"'
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e =
            this.merge(e, a.helpers);
        d = d || {};
        var g = this.escapeExpression;
        a = '<div class="recipient-type">\n  <i class="';
        (c = e.icon) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.icon, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + '"></i>\n  <input class="form-control notification-un" type="text" placeholder="MMS User" value="';
        (c = e.name) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.name, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + '"/>\n</div>\n<div class="input-append input-prepend">\n  <span class="add-on add-on-plain dark">once every</span>\n  <input class="form-control notification-interval" type="text" value="';
        (c = e.interval) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.interval, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + '">\n  <span class="add-on add-on-plain">mins</span>\n</div>\n<div class="input-append input-prepend">\n  <span class="add-on add-on-plain dark">after waiting</span>\n  <input class="form-control notification-delay" type="text" value="';
        (c = e.delay) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.delay, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + '">\n  <span class="add-on add-on-plain">mins</span>\n</div>\n<div class="alert-formats">\n  <label class="checkbox notification-email">Email<input type="checkbox"';
        if ((c = e["if"].call(b, b && b.email, {
            hash: {},
            inverse: this.noop,
            fn: this.program(1, f, d),
            data: d
        })) || 0 === c) a += c;
        a += '></label>\n  <label class="checkbox notification-sms">SMS<input type="checkbox"';
        if ((c = e["if"].call(b, b && b.sms, {
            hash: {},
            inverse: this.noop,
            fn: this.program(1, f, d),
            data: d
        })) || 0 === c) a += c;
        return a + '></label>\n</div>\n<a href="#" class="btn btn-icon-only pull-right remove-recipient" style="margin-right: 10px;"><i class="icon-trash"></i></a>\n'
    });
    Handlebars.templates["activity/alertConfig/selection_menu_event_type.hbs"] =
        Handlebars.template(function (a, b, e, c, d) {
        function f(a, b) {
            return 'class="active"'
        }

        function g(a, b) {
            return 'class="has-child-input"'
        }

        function h(a, b) {
            var c, d, f;
            c = '\n      <div class="input-group custom-metric-input" ';
            if ((d = e.unless.call(a, a && a.active, {
                hash: {},
                inverse: m.noop,
                fn: m.program(7, l, b),
                data: b
            })) || 0 === d) c += d;
            f = {
                hash: {},
                data: b
            };
            c = c + ">\n        \n        " + (q((d = e.createBootstrapDropdownSelect || a && a.createBootstrapDropdownSelect, d ? d.call(a, "operator", a && a.op, a && a.opName, a && a.operatorDropdown, "btn-group dropdown input-group-btn",
                f) : n.call(a, "createBootstrapDropdownSelect", "operator", a && a.op, a && a.opName, a && a.operatorDropdown, "btn-group dropdown input-group-btn", f))) + '\n        \n        <input id="');
            (d = e.condition) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.condition, d = typeof d === r ? d.call(a, {
                hash: {},
                data: b
            }) : d);
            c += q(d) + '" type="text" class="form-control" value="';
            (d = e.threshold) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.threshold, d = typeof d === r ? d.call(a, {
                hash: {},
                data: b
            }) : d);
            c += q(d) + '">\n\n        ';
            if ((d = e["if"].call(a, a && a.showUnitsDropdown, {
                hash: {},
                inverse: m.program(11, p, b),
                fn: m.program(9, k, b),
                data: b
            })) || 0 === d) c += d;
            return c += "\n\n      </div>\n    "
        }

        function l(a, b) {
            return 'style="display:none;"'
        }

        function k(a, b) {
            var c, d;
            c = {
                hash: {},
                data: b
            };
            return c = "\n          " + (q((d = e.createBootstrapDropdownSelect || a && a.createBootstrapDropdownSelect, d ? d.call(a, "units", a && a.units, a && a.unitsName, a && a.unitsDropdown, "btn-group dropdown input-group-btn", c) : n.call(a, "createBootstrapDropdownSelect", "units", a && a.units, a && a.unitsName, a && a.unitsDropdown, "btn-group dropdown input-group-btn",
                c))) + "\n        ")
        }

        function p(a, b) {
            var c, d;
            c = {
                hash: {},
                data: b
            };
            return c = "\n          " + (q((d = e.createBootstrapDropdownSelect || a && a.createBootstrapDropdownSelect, d ? d.call(a, "mode", a && a.mode, a && a.modeName, a && a.modeDropdown, "btn-group dropdown input-group-btn", c) : n.call(a, "createBootstrapDropdownSelect", "mode", a && a.mode, a && a.modeName, a && a.modeDropdown, "btn-group dropdown input-group-btn", c))) + "\n        ")
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var n = e.helperMissing,
            q = this.escapeExpression,
            m = this,
            r = "function";
        a = '<span class="label label-no-bg light alert-menu-label">Condition/Metric <i class="icon-info-sign" title="Select the condition or metric that will trigger the alert. If you choose to alert on a metric you will also need to include a threshold value."></i></span>\n\n<div class="scroll-pane">\n  ';
        if ((b = e.each.call(b, b && b.items, {
            hash: {},
            inverse: m.noop,
            fn: m.program(1, function (a, b) {
                var c, d;
                c = "\n  <li ";
                if ((d = e["if"].call(a, a && a.active, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(2, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '>\n    <a href="#" ';
                if ((d = e["if"].call(a, a && a.hasChildInput, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(4, g, b),
                    data: b
                })) || 0 === d) c += d;
                c += ' tabindex="-1" data-type="';
                (d = e.type) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.type, d = typeof d === r ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += q(d) + '" data-value="';
                (d = e.value) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.value, d = typeof d === r ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += q(d) + '" data-condition="';
                (d = e.condition) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.condition, d =
                    typeof d === r ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += q(d) + '">';
                (d = e.name) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.name, d = typeof d === r ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += q(d) + "</a>\n    \n    \n    ";
                if ((d = e["if"].call(a, a && a.hasChildInput, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(6, h, b),
                    data: b
                })) || 0 === d) c += d;
                return c + "\n  </li>\n  "
            }, d),
            data: d
        })) || 0 === b) a += b;
        return a + "\n</div>\n"
    });
    Handlebars.templates["activity/alertConfig/selection_menu_host_type.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, c) {
            return 'class="active"'
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var g = this,
            h = this.escapeExpression;
        a = '<span class="label label-no-bg light alert-menu-label">Host Type <i class="icon-info-sign" title="Monitor any type of host or target by type."></i></span>\n\n<div class="scroll-pane">\n';
        if ((b = e.each.call(b, b && b.items, {
            hash: {},
            inverse: g.noop,
            fn: g.program(1, function (a, c) {
                var b, d;
                b = "\n  <li ";
                if ((d = e["if"].call(a, a && a.active, {
                    hash: {},
                    inverse: g.noop,
                    fn: g.program(2, f, c),
                    data: c
                })) || 0 === d) b += d;
                b += '>\n    <a href="#" class="has-child-menu" tabindex="-1" data-value="';
                (d = e.value) ? d = d.call(a, {
                    hash: {},
                    data: c
                }) : (d = a && a.value, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: c
                }) : d);
                b += h(d) + '">';
                (d = e.name) ? d = d.call(a, {
                    hash: {},
                    data: c
                }) : (d = a && a.name, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: c
                }) : d);
                return b += h(d) + ' <i class="icon-angle-right"></i></a>\n  </li>\n'
            }, d),
            data: d
        })) || 0 === b) a += b;
        return a + "\n</div>\n"
    });
    Handlebars.templates["activity/alertConfig/selection_menu_type.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, b) {
            return 'class="active"'
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var g = this,
            h = this.escapeExpression;
        a = '<span class="label label-no-bg light alert-menu-label">Target <i class="icon-info-sign" title="Select a target category to monitor. Different target categories have different possible alert triggers."></i></span>\n\n<div class="scroll-pane">\n  ';
        if ((b = e.each.call(b, b && b.items, {
            hash: {},
            inverse: g.noop,
            fn: g.program(1, function (a, b) {
                var c, d;
                c = "\n    <li ";
                if ((d = e["if"].call(a, a && a.active, {
                    hash: {},
                    inverse: g.noop,
                    fn: g.program(2,
                        f, b),
                    data: b
                })) || 0 === d) c += d;
                c += '>\n      <a href="#" class="has-child-menu" tabindex="-1" data-value="';
                (d = e.value) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.value, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += h(d) + '">';
                (d = e.name) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.name, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                return c += h(d) + ' <i class="icon-angle-right"></i></a>\n    </li>\n  '
            }, d),
            data: d
        })) || 0 === b) a += b;
        return a + "\n</div>\n"
    });
    Handlebars.templates["activity/event/backup_audit.hbs"] =
        Handlebars.template(function (a, b, e, c, d) {
        function f(a, c) {
            return "Changed "
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var g = this.escapeExpression,
            h = this,
            l = e.helperMissing;
        a = '<span class="type-indicator">\n  <i class="';
        (c = e.icon) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.icon, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + ' icon-large"></i> \n</span>\n<div class="event-description">\n    <strong>\n        ';
        (c = e._t) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b._t, c = "function" ===
            typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + " ";
        (c = e.description) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.description, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + " ";
        if ((c = e["if"].call(b, b && b.configState, {
            hash: {},
            inverse: h.noop,
            fn: h.program(1, function (a, c) {
                var b;
                (b = e.configState) ? b = b.call(a, {
                    hash: {},
                    data: c
                }) : (b = a && a.configState, b = "function" === typeof b ? b.call(a, {
                    hash: {},
                    data: c
                }) : b);
                return g(b)
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += "\n    </strong>\n    <br/>\n    \n    ";
        if ((c = e["if"].call(b,
            b && b.clusterName, {
            hash: {},
            inverse: h.noop,
            fn: h.program(3, function (a, b) {
                var c, d;
                c = '\n    <a href="/backup/dashboard/';
                (d = e.cid) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.cid, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += g(d) + "/cluster/";
                (d = e.clusterId) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.clusterId, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += g(d) + '">';
                (d = e.clusterName) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.clusterName, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                return c +=
                    g(d) + "</a></br>\n    "
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += "\n    \n    ";
        if ((c = e["if"].call(b, b && b.rsId, {
            hash: {},
            inverse: h.noop,
            fn: h.program(5, function (a, b) {
                var c, d;
                c = '\n    <a href="/backup/dashboard/';
                (d = e.cid) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.cid, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += g(d) + "/";
                (d = e.rsId) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.rsId, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += g(d) + '">';
                (d = e.rsId) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.rsId, d = "function" ===
                    typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                return c += g(d) + "</a></br>\n    "
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += '\n    \n    <em class="muted">\n    <small>\n    ';
        if ((c = e["if"].call(b, b && b.un, {
            hash: {},
            inverse: h.noop,
            fn: h.program(7, function (a, b) {
                var c, d;
                c = "Changed by ";
                (d = e.un) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.un, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                return c += g(d)
            }, d),
            data: d
        })) || 0 === c) a += c;
        if ((c = e["if"].call(b, b && b.remoteAddr, {
            hash: {},
            inverse: h.noop,
            fn: h.program(9, function (a, b) {
                var c = "",
                    d;
                if ((d = e.unless.call(a, a && a.un, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(10, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += " from ";
                (d = e.remoteAddr) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.remoteAddr, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                return c += g(d)
            }, d),
            data: d
        })) || 0 === c) a += c;
        d = {
            hash: {},
            data: d
        };
        return a = a + '\n    </small>\n    </em>   \n</div>\n<span class="timestamp">' + (g((c = e.formatDateTimeWithSeconds || b && b.formatDateTimeWithSeconds, c ? c.call(b, b && b.cre, d) : l.call(b, "formatDateTimeWithSeconds", b && b.cre,
            d))) + "</span>\n")
    });
    Handlebars.templates["activity/event/event.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, b) {
            var c, d;
            c = ' <em class="muted">in replica set</em> ';
            (d = e.rsId) ? d = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.rsId, d = typeof d === g ? d.call(a, {
                hash: {},
                data: b
            }) : d);
            return c += h(d)
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var g = "function",
            h = this.escapeExpression,
            l = this,
            k = e.helperMissing;
        a = '<span class="type-indicator">\n  <i class="';
        (c = e.icon) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.icon, c = typeof c === g ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += h(c) + ' icon-large"></i> \n</span>\n<div class="event-description">\n    <strong>\n        ';
        (c = e._t) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b._t, c = typeof c === g ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += h(c) + " ";
        (c = e.description) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.description, c = typeof c === g ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += h(c) + '\n    </strong><br>\n    <a href="';
        (c = e.targetLink) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.targetLink, c = typeof c ===
            g ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += h(c) + '">';
        (c = e.targetName) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.targetName, c = typeof c === g ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += h(c) + "</a>\n    ";
        if ((c = e["if"].call(b, b && b.isForHost, {
            hash: {},
            inverse: l.noop,
            fn: l.program(1, function (a, c) {
                var b;
                return (b = e["if"].call(a, a && a.rsId, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(2, f, c),
                    data: c
                })) || 0 === b ? b : ""
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += "\n    ";
        if ((c = e["if"].call(b, b && b.isElectionEvent, {
            hash: {},
            inverse: l.noop,
            fn: l.program(4, function (a,
                b) {
                var c, d;
                c = ' <em class="muted">elected</em> <a href="';
                (d = e.memberLink) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.memberLink, d = typeof d === g ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                c += h(d) + '">';
                (d = e.memberName) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.memberName, d = typeof d === g ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                return c += h(d) + "</a>"
            }, d),
            data: d
        })) || 0 === c) a += c;
        d = {
            hash: {},
            data: d
        };
        return a = a + '\n</div>\n<span class="timestamp">' + (h((c = e.formatDateTimeWithSeconds || b && b.formatDateTimeWithSeconds, c ? c.call(b, b && b.cre, d) : k.call(b,
            "formatDateTimeWithSeconds", b && b.cre, d))) + "</span>\n")
    });
    Handlebars.templates["activity/event/host_audit.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, c) {
            return "Changed "
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var g = this.escapeExpression,
            h = this,
            l = e.helperMissing;
        a = '<span class="type-indicator">\n  <i class="';
        (c = e.icon) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.icon, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + ' icon-large"></i> \n</span>\n<div class="event-description">\n    <strong>\n        ';
        (c = e._t) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b._t, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + " ";
        (c = e.description) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.description, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c) + "\n    </strong>\n    <br/>\n    ";
        if ((c = e["if"].call(b, b && b.ipAddress, {
            hash: {},
            inverse: h.noop,
            fn: h.program(1, function (a, c) {
                var b, d;
                b = "\n    New IP: ";
                (d = e.ipAddress) ? d = d.call(a, {
                    hash: {},
                    data: c
                }) : (d = a && a.ipAddress, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: c
                }) :
                    d);
                return b += g(d) + "\n    <br/>\n    "
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += "\n    ";
        if ((c = e["if"].call(b, b && b.targetLink, {
            hash: {},
            inverse: h.noop,
            fn: h.program(3, function (a, c) {
                var b, d;
                b = '<a href="';
                (d = e.targetLink) ? d = d.call(a, {
                    hash: {},
                    data: c
                }) : (d = a && a.targetLink, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: c
                }) : d);
                return b += g(d) + '">'
            }, d),
            data: d
        })) || 0 === c) a += c;
        (c = e.targetName) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.targetName, c = "function" === typeof c ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += g(c);
        if ((c = e["if"].call(b,
            b && b.targetLink, {
            hash: {},
            inverse: h.noop,
            fn: h.program(5, function (a, b) {
                return "</a>"
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += '\n    <br/>\n    <em class="muted">\n    <small>\n    ';
        if ((c = e["if"].call(b, b && b.un, {
            hash: {},
            inverse: h.noop,
            fn: h.program(7, function (a, b) {
                var c, d;
                c = "Changed by ";
                (d = e.un) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.un, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                return c += g(d)
            }, d),
            data: d
        })) || 0 === c) a += c;
        if ((c = e["if"].call(b, b && b.remoteAddr, {
            hash: {},
            inverse: h.noop,
            fn: h.program(9, function (a,
                b) {
                var c = "",
                    d;
                if ((d = e.unless.call(a, a && a.un, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(10, f, b),
                    data: b
                })) || 0 === d) c += d;
                c += " from ";
                (d = e.remoteAddr) ? d = d.call(a, {
                    hash: {},
                    data: b
                }) : (d = a && a.remoteAddr, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: b
                }) : d);
                return c += g(d)
            }, d),
            data: d
        })) || 0 === c) a += c;
        d = {
            hash: {},
            data: d
        };
        return a = a + '\n    </small>\n    </em>\n    \n</div>\n<span class="timestamp">' + (g((c = e.formatDateTimeWithSeconds || b && b.formatDateTimeWithSeconds, c ? c.call(b, b && b.cre, d) : l.call(b, "formatDateTimeWithSeconds",
            b && b.cre, d))) + "</span>\n")
    });
    Handlebars.templates["activity/event/metric_event.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        function f(a, c) {
            var b, d;
            b = ' <em class="muted">in replica set</em> ';
            (d = e.rsId) ? d = d.call(a, {
                hash: {},
                data: c
            }) : (d = a && a.rsId, d = typeof d === g ? d.call(a, {
                hash: {},
                data: c
            }) : d);
            return b += h(d)
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        var g = "function",
            h = this.escapeExpression,
            l = this,
            k = e.helperMissing;
        a = '<span class="type-indicator">\n  ';
        if ((c = e["if"].call(b, b &&
            b.isOpen, {
            hash: {},
            inverse: l.program(3, function (a, c) {
                return '\n    <i class="icon-ok icon-large"></i> \n  '
            }, d),
            fn: l.program(1, function (a, c) {
                return '\n    <i class="icon-warning-sign icon-large"></i> \n  '
            }, d),
            data: d
        })) || 0 === c) a += c;
        a += '\n</span>\n<div class="event-description">\n    <strong title="';
        (c = e.metric) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.metric, c = typeof c === g ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += h(c) + " Sample: ";
        (c = e.cv) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.cv, c = typeof c === g ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += h(c) + '">\n        ';
        (c = e.metric) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.metric, c = typeof c === g ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += h(c) + " ";
        (c = e.description) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.description, c = typeof c === g ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += h(c) + '\n    </strong> <em class="metric-mode">(';
        (c = e.mode) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.mode, c = typeof c === g ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += h(c) + ')</em><br>\n    <a href="';
        (c = e.targetLink) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.targetLink,
            c = typeof c === g ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += h(c) + '">';
        (c = e.targetName) ? c = c.call(b, {
            hash: {},
            data: d
        }) : (c = b && b.targetName, c = typeof c === g ? c.call(b, {
            hash: {},
            data: d
        }) : c);
        a += h(c) + "</a>\n    ";
        if ((c = e["if"].call(b, b && b.isForHost, {
            hash: {},
            inverse: l.noop,
            fn: l.program(5, function (a, c) {
                var b;
                return (b = e["if"].call(a, a && a.rsId, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(6, f, c),
                    data: c
                })) || 0 === b ? b : ""
            }, d),
            data: d
        })) || 0 === c) a += c;
        d = {
            hash: {},
            data: d
        };
        return a = a + '\n</div>\n<span class="timestamp">' + (h((c = e.formatDateTimeWithSeconds ||
            b && b.formatDateTimeWithSeconds, c ? c.call(b, b && b.cre, d) : k.call(b, "formatDateTimeWithSeconds", b && b.cre, d))) + "</span>\n")
    });
    Handlebars.templates["admin/editUserDetails.hbs"] = Handlebars.template(function (a, b, e, c, d) {
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        d = d || {};
        a = "";
        var f = this.escapeExpression;
        if ((b = e.each.call(b, b && b.roleGroupPairs, {
            hash: {},
            inverse: this.noop,
            fn: this.program(1, function (a, c) {
                var b, d;
                b = '\n<div class="form-group">\n  <label class="col-sm-4 control-label">';
                (d = e.group) ?
                    d = d.call(a, {
                    hash: {},
                    data: c
                }) : (d = a && a.group, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: c
                }) : d);
                b += f(d) + '</label>\n\t<div class="col-sm-7">\n\t\t<select id="';
                (d = e.groupid) ? d = d.call(a, {
                    hash: {},
                    data: c
                }) : (d = a && a.groupid, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: c
                }) : d);
                b += f(d) + '" data-user="';
                (d = e.user) ? d = d.call(a, {
                    hash: {},
                    data: c
                }) : (d = a && a.user, d = "function" === typeof d ? d.call(a, {
                    hash: {},
                    data: c
                }) : d);
                b += f(d) + '" data-group="';
                (d = e.groupid) ? d = d.call(a, {
                    hash: {},
                    data: c
                }) : (d = a && a.groupid, d = "function" ===
                    typeof d ? d.call(a, {
                    hash: {},
                    data: c
                }) : d);
                return b += f(d) + '" class="role-select input-large">\n\t\t\t<option id="GROUP_ADMIN" value="GROUP_ADMIN">Group Admin</option>\n\t\t\t<option id="READ_ONLY" value="READ_ONLY">Read Only</option>\n\t\t</select>\n\t</div>\n</div>\n'
            }, d),
            data: d
        })) || 0 === b) a += b;
        return a + "\n"
    })
})();
_.extend(window, {
    MMS: {
        Globals: {},
        i18n: {},
        Views: {},
        Models: {},
        Decorators: {},
        Collections: {}
    }
});
"object" === typeof Backbone && (MMS.vent = new Backbone.Wreqr.EventAggregator);
MMS.Globals.VALIDATE_BACKBONE_MODELS = !0;
$.ajaxSetup({
    cache: !1
});
(function (a, b) {
    $.ajaxPrefilter(function (e, c, d) {
        !/^(GET|HEAD|OPTIONS|TRACE)$/.test(e.type) && !e.crossDomain && (d.setRequestHeader("X-CSRF-Token", a), d.setRequestHeader("X-CSRF-Time", b))
    })
})($('meta[name="csrf-token"]').attr("content"), $('meta[name="csrf-time"]').attr("content"));

function showLoading() {
    $("#loading").show();
    $("#usernameHeader").hide()
}

function hideLoading() {
    setTimeout(function () {
        $("#loading").fadeOut();
        $("#usernameHeader").fadeIn()
    }, 100)
}

function strStartsWith(a, b) {
    return 0 === a.indexOf(b)
}

function strEndsWith(a, b) {
    return a.match(b + "$") == b
}
$(document).ready(function () {
    $(".help_and_support .header input[name=query]").focus(function () {
        $(".help_and_support .header").addClass("search")
    });
    $(".help_and_support .header input[name=query]").focusout(function () {
        $(".help_and_support .header").removeClass("search")
    })
});
(function (a) {
    function b(a, b) {
        a.on("submit", function (g) {
            g = p(a, b);
            e(a, b);
            if (d(a, b) && f(a, b)) return null === b.handler || !0 === b.handler(g, function (c, d) {
                    k(a, b, c, d)
                }, function (d) {
                    c(a, b, d)
                }, a) ? !0 : !1;
            c(a, b);
            return !1
        })
    }

    function e(a, b) {
        a.find(".formErrorMsgs").hide();
        a.find(".form-group").removeClass("has-error");
        a.find("input[type=submit],button[type=submit]").attr("disabled", "disabled");
        showLoading()
    }

    function c(a, b, c) {
        hideLoading();
        c && a.find(".formErrorMsgs").html('<div class="alert alert-success"><i class="icon-warning-sign"></i> ' +
            c + "</div>").fadeIn("fast");
        a.find("input[type=submit],button[type=submit]").removeAttr("disabled")
    }

    function d(b, c) {
        var d = !0,
            e = [],
            f = [];
        _.each(b.find("[data-notblank]"), function (b) {
            b = a(b);
            var c = b.closest(".form-group");
            trimmedVal = a.trim(b.val());
            "" === trimmedVal && (e.push(h(b, c)), f.push(c), d = !1)
        });
        !1 === d && k(b, c, l(e) + " must not be blank", f);
        return d
    }

    function f(b, c) {
        var d = !0,
            e = [],
            f = [];
        _.each(b.find("[data-checked]"), function (b) {
            b = a(b);
            var c = b.closest(".form-group");
            b.is(":not(:checked)") && (e.push(g(h(b,
                c))), f.push(c), d = !1)
        });
        !1 === d && k(b, c, l(e) + " must be checked", f);
        return d
    }

    function g(a) {
        return '"' + a + '"'
    }

    function h(a, b) {
        return 0 < b.length ? b.find("label:first").text() : a.attr("placeholder")
    }

    function l(a) {
        var b = _.initial(a);
        a = _.last(a);
        return 0 === b.length ? a : 1 == b.length ? b + " and " + a : b.join(", ") + ", and " + a
    }

    function k(a, b, c, d) {
        a.find(".formErrorMsgs").html('<div class="alert alert-danger"><i class="icon-warning-sign"></i> ' + c + "</div>").fadeIn("fast");
        _.each(d, function (a) {
            a.addClass("has-error")
        })
    }

    function p(b,
        c) {
        var d = {}, e;
        for (e in c.uiMapping) d[e] = a(c.uiMapping[e]).val();
        return d
    }
    a.common_form = function (c, d) {
        this.options = {};
        this.init = function (c, d) {
            this.options = a.extend({}, a.common_form.defaultOptions, d);
            b(c, this.options)
        };
        this.init(c, d)
    };
    a.fn.common_form = function (b) {
        return this.each(function () {
            new a.common_form(a(this), b)
        })
    };
    a.common_form.defaultOptions = {
        uiMapping: {},
        handler: null
    }
})(jQuery);
MMS.Views.ConfirmationDialog = Backbone.View.extend({
    tagName: "div",
    className: "modal",
    attributes: {
        tabindex: "-1"
    },
    template: Handlebars.templates["core/confirmation_dialog.hbs"],
    initialize: function (a) {
        this.options = a
    },
    render: function () {
        var a = this;
        this.$el.html(this.template());
        this.$el.find(".windowTitle").text(this.options.windowTitle);
        this.$el.find(".okButton").text(this.options.okButtonText || "OK").click(function () {
            a.ok()
        });
        this.$el.find(".cancelButton").text(this.options.cancelButtonText || "Cancel").click(function () {
            a.cancel()
        });
        this.$el.on("hidden", function () {
            a.close()
        });
        this.$el.modal({
            show: !0
        });
        return this
    },
    close: function () {
        this.remove()
    },
    ok: function () {
        _.isFunction(this.options.ok) && this.options.ok.apply(this);
        this.$el.modal("hide")
    },
    cancel: function () {
        _.isFunction(this.options.cancel) && this.options.cancel.apply(this);
        this.$el.modal("hide")
    }
});
var DateHelpers = function () {
    timezoneJS.timezone.loadingScheme = timezoneJS.timezone.loadingSchemes.MANUAL_LOAD;
    timezoneJS.timezone.transport = function (a) {
        if (!1 !== a.async) throw Error("Custom timezoneJS transport is designed to work with async: false");
        return $.ajax({
            url: a.url,
            dataType: "text",
            method: "GET",
            cache: !0,
            async: !1
        }).responseText
    };
    timezoneJS.timezone.loadZoneJSONData("/static/tz/tzdata2013g/allTimeZones.json", !0);
    var a = function (a, e, c) {
        if (void 0 === e) {
            e = "m/d/y - H:i";
            if (MMS.Globals.DATE_FORMAT_PATTERN) switch (MMS.Globals.DATE_FORMAT_PATTERN) {
                case "MM/dd/yy - HH:mm":
                    e =
                        "m/d/y - H:i";
                    break;
                case "yyyy-MM-dd - HH:mm":
                    e = "Y-m-d - H:i";
                    break;
                case "dd-MM-yy - HH:mm":
                    e = "d-m-y - H:i"
            }
            c && (e += ":s")
        }
        a = MMS.Globals.TIME_ZONE_ID ? "number" === typeof a ? new timezoneJS.Date(a, MMS.Globals.TIME_ZONE_ID) : new timezoneJS.Date(a.getTime(), MMS.Globals.TIME_ZONE_ID) : "number" === typeof a ? new Date(a) : a;
        return window.DateFormatter.format(a, e)
    };
    return {
        format: a,
        formatWithSeconds: function (b) {
            return a(b, void 0, !0)
        },
        yesterdayDateStr: function () {
            var a = new Date((new Date).getTime() - 864E5),
                e = a.getMonth() +
                    1;
            10 > e && (e = "0" + e);
            var c = a.getDate();
            10 > c && (c = "0" + c);
            return "" + a.getFullYear() + e + c
        }
    }
}();
MMS.Models.Deployment = Backbone.Model.extend({
    groupId: "",
    url: function () {
        return "/automation/conf/" + this.groupId
    },
    publishDraft_url: function () {
        return "/automation/conf/publish/" + this.groupId
    },
    discardDraft_url: function () {
        return "/automation/conf/discard/" + this.groupId
    },
    initialize: function (a) {
        a.groupId && (this.groupId = a.groupId)
    },
    isDraft: function () {
        return "DRAFT" == this.get("state")
    },
    markAsDraft: function () {
        this.set("state", "DRAFT")
    },
    getProcesses: function () {
        return this.get("cluster").processes
    },
    getShardedClusters: function () {
        return this.get("cluster").sharding
    },
    getShardedClusterConfig: function (a) {
        return !a ? null : _.find(this.getShardedClusters(), function (b) {
            return b.name === a
        })
    },
    getShards: function (a) {
        return this.getShardedClusterConfig(a).shards
    },
    getShard: function (a, b) {
        if (!a || !b) return null;
        var e = getShardedClusterConfig(a);
        _.find(e.shards, function (a) {
            return a.rs === b
        })
    },
    getReplicaSets: function () {
        return this.get("cluster").replicaSets
    },
    getShardedReplicaSets: function () {
        var a = [];
        _.each(this.getShardedClusters(), function (b) {
            _.each(b.shards, function (b) {
                a.push(b.rs)
            })
        });
        return a.sort()
    },
    getNonShardedReplicaSets: function () {
        var a = this.getShardedReplicaSets();
        return _.filter(this.getReplicaSets(), function (b) {
            return -1 == _.indexOf(a, b._id, !0)
        })
    },
    getShardedClusterProcesses: function (a) {
        var b = this,
            e = [];
        if (!a) return e;
        var c = this.getShardedClusterConfig(a);
        if (!c) return e;
        _.each(c.shards, function (a) {
            (a = b.getReplicaSetConfig(a.rs)) && _.each(a.members, function (a) {
                e.push(a.host)
            })
        });
        _.each(c.configServer, function (a) {
            e.push(a)
        });
        return e = e.concat(this.getClusterMongosNames(a))
    },
    getShardProcesses: function (a, b) {
        var e = [],
            c = this.getShard(a, b);
        return !c ? e : getReplicaSetProcesses(c.rs)
    },
    getClusterMongosProcesses: function (a) {
        return _.filter(this.getProcesses(), function (b) {
            return "mongos" === b.processType && b.cluster === a
        })
    },
    getClusterMongosNames: function (a) {
        return _.map(this.getClusterMongosProcesses(a), function (a) {
            return a.name
        })
    },
    getClusterConfigServers: function (a) {
        var b = this.getShardedClusterConfig(a);
        return _.filter(this.getProcesses(), function (a) {
            return -1 !== _.indexOf(b.configServer,
                a.name)
        })
    },
    getReplicaSetConfig: function (a) {
        return !a ? null : _.find(this.getReplicaSets(), function (b) {
            return b._id === a
        })
    },
    getReplicaSetProcesses: function (a) {
        return !a ? [] : _.filter(this.getProcesses(), function (b) {
            return b.args && b.args.replSet == a
        })
    },
    getReplicaSetMongodVersion: function (a) {
        if (!a) return null;
        a = this.getReplicaSetProcesses(a);
        var b = null;
        _.each(a, function (a) {
            b = a.version
        });
        return b
    },
    setReplicaSetMongodVersion: function (a, b) {
        if (a) {
            var e = this.getReplicaSetProcesses(a);
            _.each(e, function (a) {
                a.version =
                    b
            })
        }
    },
    getMinimumVersion: function (a) {
        var b = null,
            e = this;
        _.each(a, function (a) {
            a = e.getProcess(a);
            if (null === b || b < a.getVersion()) b = a.getVersion()
        });
        return b
    },
    setMinimumVersion: function (a, b) {
        var e = this;
        _.each(a, function (a) {
            e.getProcess(a).setVersion(b)
        })
    },
    getShardedClusterMongodVersion: function (a) {
        return !a ? null : this.getMinimumVersion(this.getShardedClusterProcesses(a))
    },
    setShardedClusterMongodVersion: function (a, b) {
        a && this.setMinimumVersion(this.getShardedClusterProcesses(a), b)
    },
    getShardedClusterConfigsVersion: function (a) {
        return !a ?
            null : this.getMinimumVersion(this.getShardedClusterConfig(a).configServer)
    },
    setShardedClusterConfigsVersion: function (a, b) {
        if (a) return this.setMinimumVersion(this.getShardedClusterConfig(a).configServer, b)
    },
    getShardedClusterMongosVersion: function (a) {
        return !a ? null : this.getMinimumVersion(this.getClusterMongosNames(a))
    },
    setShardedClusterMongosVersion: function (a, b) {
        return !a ? null : this.setMinimumVersion(this.getClusterMongosNames(a), b)
    },
    getProcess: function (a) {
        var b = _.find(this.getProcesses(), function (b) {
            return b.name ===
                a
        }),
            e;
        b.args && b.args.replSet && (e = this.getReplicaSetConfig(b.args.replSet));
        return new MMS.Auto.Models.ProcessConfig(b, e)
    },
    _initCommonProcessAttrs: function (a) {
        a.name || (a.name = a.hostname + "_" + a.port);
        a.args = a.args || {};
        a.args.port = parseInt(a.port, 10);
        a.args.dbpath = a.dbpath;
        a.args.logpath = a.logpath;
        a.args.smallfiles = !0;
        a.args.nojournal = !0;
        a.args.oplogSize = 100;
        a.args.nohttpinterface = !0;
        delete a.port;
        delete a.dbpath;
        delete a.logpath
    },
    addConfigServerProcess: function (a, b) {
        var e = this.getProcesses() || [],
            c = this.getShardedClusterConfig(b);
        this._initCommonProcessAttrs(a);
        a.processType = "mongod";
        a.args.configsvr = !0;
        e.push(a);
        c.configServer.push(a.name);
        this.get("cluster").processes = e
    },
    addMongosProcess: function (a, b) {
        var e = this.getProcesses() || [];
        this.getShardedClusterConfig(b);
        this._initCommonProcessAttrs(a);
        a.processType = "mongos";
        a.cluster = b;
        delete a.args.dbpath;
        delete a.args.smallfiles;
        delete a.args.nojournal;
        delete a.args.oplogSize;
        e.push(a);
        this.get("cluster").processes = e
    },
    addProcess: function (a, b) {
        var e = this.get("cluster").processes || [];
        this._initCommonProcessAttrs(a);
        a.processType = "mongod";
        if (b) {
            a.args.replSet = b;
            var c = this.getReplicaSetConfig(b),
                d = 0;
            _.each(c.members, function (a) {
                a._id >= d && (d = a._id)
            });
            var f = {
                _id: d + 1,
                host: a.name
            };
            a.priority && (f.priority = parseInt(a.priority, 10));
            a.votes && (f.votes = parseInt(a.votes, 10));
            a.slaveDelay && (f.slaveDelay = parseInt(a.slaveDelay, 10));
            a.hidden && (f.hidden = a.hidden);
            a.arbiterOnly && (f.arbiterOnly = a.arbiterOnly);
            c.members.push(f)
        }
        delete a.priority;
        delete a.votes;
        delete a.slaveDelay;
        delete a.hidden;
        delete a.arbiterOnly;
        e.push(a);
        this.get("cluster").processes = e
    },
    setProcessAttributes: function (a, b) {
        var e = this.getProcess(a),
            c = e.getProcessArgument("replSet");
        e && _.each(_.keys(b), function (a) {
            if (_.contains(["dbpath"], a)) e.setProcessArgument(a, b[a]);
            else if (_.contains(["votes", "priority", "slaveDelay", "hidden", "arbiterOnly"], a)) {
                var f = this.getReplicaSetConfig(c);
                _.each(f.members, function (c) {
                    e.getName() == c.host && (b[a] ? _.contains(["hidden", "arbiterOnly"], a) ? c[a] = b[a] : c[a] = parseInt(b[a], 10) : delete c[a])
                })
            } else b[a] ?
                    e.set(a, b[a]) : e.process[a] && e.unset(a)
        })
    },
    addReplicaSet: function (a) {
        this.get("cluster").replicaSets.push({
            _id: a,
            members: []
        })
    },
    clearReplicaSet: function (a) {
        this.getReplicaSetConfig(a).members = [];
        this.get("cluster").processes = _.reject(this.getProcesses(), function (b) {
            return b.args && b.args.replSet === a
        })
    },
    addShardToCluster: function (a, b) {
        var e = this.getShardedClusterConfig(a);
        if (!e) return !1;
        e.shards.push({
            _id: b,
            tags: [],
            rs: b
        });
        this.addReplicaSet(b)
    },
    addShardedCluster: function (a) {
        this.get("cluster").sharding.push({
            name: a,
            configServer: [],
            collections: [],
            shards: []
        })
    },
    clearShardedCluster: function (a) {
        var b = this.getShardedClusterConfig(a);
        this.get("cluster").processes = _.reject(this.getProcesses(), function (b) {
            return b.cluster && b.cluster === a
        });
        _.each(b.shards, function (a) {
            this.clearReplicaSet(a.rs);
            this.get("cluster").replicaSets = _.reject(this.get("cluster").replicaSets, function (b) {
                return a.rs === b._id
            })
        }, this);
        b.shards = [];
        _.each(b.configServer, function (a) {
            this.get("cluster").processes = _.reject(this.getProcesses(), function (b) {
                return b.name ===
                    a
            })
        }, this);
        b.configServer = []
    },
    save: function () {
        var a = this;
        return $.ajax({
            type: "PUT",
            url: this.url(),
            data: {
                config: JSON.stringify(this.attributes, void 0, 2)
            },
            success: function () {
                a.markAsDraft();
                a.trigger("update")
            }
        })
    }
});
MMS.Models.ProcessArguments = Backbone.Model.extend({
    defaults: {
        logpath: null,
        port: null,
        dbpath: void 0,
        replSet: void 0
    }
});
MMS.Models.Process = Backbone.Model.extend({
    defaults: {
        name: null,
        processType: null,
        version: "2.4.0",
        args: null,
        cluster: void 0,
        numactl: void 0,
        taskset: void 0,
        logLevel: void 0,
        disabled: void 0,
        hostname: void 0
    },
    parse: function (a, b) {
        a.args && (a.args = new MMS.Models.ProcessArguments(a.args));
        return a
    },
    toJSON: function (a) {
        a = _.clone(this.attributes);
        a.mt && (a.args = a.args.toJSON());
        return a
    }
});
MMS.Views.Dialog = Backbone.View.extend({
    currentStep: null,
    events: {
        "click .actions .next": "nextStep",
        "click .actions .prev": "prevStep",
        "click .actions .cancel": "cancel"
    },
    initialize: function (a) {
        var b = this;
        this.config = _.extend({}, this.config, a && a.config || {});
        this._reset();
        _.each(this.config.steps, function (a) {
            !a.view && a.viewClass && (a.view = new a.viewClass({
                el: b.$step(a.id),
                model: b.model,
                dialog: b.$el
            }))
        })
    },
    render: function (a) {
        this._reset();
        _.each(this.config.steps, function (b) {
            b.view && b.view.render(a)
        });
        return this
    },
    selectStep: function (a) {
        this.currentStep = a;
        return this
    },
    show: function (a) {
        this.currentStep = a || this._firstStep();
        this.$steps().hide();
        this.$currentStep().show();
        a = this._step(this.currentStep);
        var b;
        a && (b = a.view && _.isFunction(a.view.nextButtonText) ? a.view.nextButtonText.call(a.view) || "Next" : a.next_button || "Next", (titleText = a.view && _.isFunction(a.view.titleText) ? a.view.titleText.call(a.view) || null : a.title || null) && this.$(".modal-title").text(titleText), this.$("a.prev")[!a.prev_step ? "hide" : "show"](), this.$("button.next").text(b));
        this.$el.modal({
            show: !0
        });
        this.trigger("show");
        return this
    },
    cancel: function () {
        return this.hide()
    },
    hide: function () {
        this.$el.modal("hide");
        return this
    },
    error: function (a) {
        a ? (this.$(".errorMsg").show().html(a), this.$(".infoMsg").hide().text("")) : this.$(".errorMsg").hide().text("");
        return this
    },
    info: function (a) {
        a ? (this.$(".infoMsg").show().html(a), this.$(".errorMsg").hide().text("")) : this.$(".infoMsg").hide().text("");
        return this
    },
    nextStep: function () {
        var a = this,
            b = this._currentStep(),
            e;
        e = _.isFunction(b.view.validate) ?
            b.view.validate() : !0;
        var c = function (b) {
            a.error(null);
            a.info(null);
            b ? a._goTo(b) : a._advanceStep(1)
        }, d = function (b) {
                a.error(b || "Error occurred")
            };
        !0 === e ? _.isFunction(b.view.proceed) ? b.view.proceed.call(b.view, {
            success: c,
            fail: d
        }) : c() : d(e);
        return this
    },
    prevStep: function () {
        return this.error(null)._advanceStep(-1)
    },
    _reset: function () {
        this.error(null);
        this.info(null);
        _.isFunction(this.reset) && this.reset();
        return this
    },
    _goTo: function (a) {
        "_terminate" === a ? this.hide() : this.show(a);
        return this
    },
    _advanceStep: function (a) {
        var b =
            this._step(this.currentStep);
        a = 0 < a ? "next_step" : "prev_step";
        if (!b || !b[a]) return this;
        b = b[a];
        _.isFunction(b) && (b = b.call(this, this._currentStep()));
        return this._goTo(b)
    },
    _step: function (a) {
        return _.isString(a) ? _.find(this.config.steps, function (b) {
            return b.id == a
        }) : _.isNumber(a) ? this.config.steps[a] : null
    },
    _firstStep: function () {
        return this.config.steps[0]
    },
    _currentStep: function () {
        return this._step(this.currentStep)
    },
    $currentStep: function () {
        return this.$step(this.currentStep)
    },
    $steps: function () {
        return this.$(".dialogSteps >.step")
    },
    $step: function (a) {
        return this.$(".dialogSteps >." + a)
    }
});
MMS.Views.FormFieldBindingMixin = {
    updateModelWithVal: function (a) {
        return function (b) {
            b.preventDefault();
            b = $(b.target);
            this.model.set(a, b.val())
        }
    },
    updateModelWithIntegerVal: function (a) {
        return function (b) {
            b.preventDefault();
            b = $(b.target);
            this.model.set(a, parseInt(b.val(), 10))
        }
    },
    updateModelWithChecked: function (a) {
        return function (b) {
            b.preventDefault();
            b = $(b.target);
            this.model.set(a, b.is(":checked"))
        }
    }
};
$(document).ready(function () {
    function a(a) {
        var b = $("#setGroupForm");
        b.find('input[name="newGroupId"]').val(a);
        b.find('input[name="returnUri"]').val(MMS.GroupChangeMapper.findDestinationUri(location.href, a));
        b.submit()
    }

    function b() {
        $("#changeCustomer").hide();
        $("#customerNameInput").show();
        $("#customerNameInput").focus();
        $("#customerNameInput").autocomplete({
            source: "/group/search?showActiveAgentCount=true",
            delay: 150,
            minLength: 2,
            select: function (b, c) {
                showLoading();
                a(c.item.id)
            }
        }).data("ui-autocomplete")._renderItem = function (a, b) {
            var d = $("<li></li>").data("item.autocomplete", b).append($("<a>").text(b.label));
            void 0 !== b.activeAgentCount && d.find("a").append($("<div>").css({
                display: "inline",
                "text-align": "right",
                "float": "right"
            }).text(" : " + b.activeAgentCount));
            return d.appendTo(a)
        }
    }
    $("#changeCustomer, #changeCustomerLabel").click(function () {
        b()
    });
    $("#changeCustomerFew").change(function () {
        var b = $("#changeCustomerFew option:selected");
        a(b.attr("value"))
    })
});
MMS.GroupChangeMapper = function () {
    var a = [],
        b = function (a, b) {
            this.regex = RegExp(a);
            this.destinationUriBuilder = b
        }, e = function (c, e) {
            a.push(new b(c, e))
        }, c = {
            hostList: function (a, b) {
                return "/host/list/" + b
            },
            backupDashboard: function (a, b) {
                return "/backup/dashboard/" + b
            },
            userAccount: function (a, b) {
                return "/user/account/" + b
            },
            dashboardView: function (a, b) {
                return "/dashboard/view/" + b
            },
            brsGlobalStatus: function (a, b) {
                return "/backup/admin"
            },
            currentKeepQS: function (a, b) {
                return this.current(a, b, !1)
            },
            currentDropQS: function (a, b) {
                return this.current(a,
                    b, !0)
            },
            current: function (a, b, c) {
                if (a.match(/(.*\/)?([a-f0-9]+)?(\?[^#]*)?(#.*)?/)) {
                    a = RegExp.$1;
                    var e = RegExp.$3,
                        l = RegExp.$4,
                        k = !! RegExp.$2;
                    return c ? a + (k ? b : "") + l : a + (k ? b : "") + e + l
                }
                return this.hostList(b)
            }
        };
    e("/host/cluster/.*", c.hostList);
    e("/host/chartReplicaSetHosts/.*", c.hostList);
    e("/host/detail/.*", c.hostList);
    e("/backup/dashboard/.+/.*", c.backupDashboard);
    e("/user/addAnotherGroup/.*", c.userAccount);
    e("/dashboard/view/.+\\?did=.*", c.dashboardView);
    e("/dashboard/createOrEdit/.*", c.dashboardView);
    e("/backup/admin",
        c.brsGlobalStatus);
    e("/host/list/.*", c.currentDropQS);
    e(".*", c.currentKeepQS);
    return {
        findDestinationUri: function (b, e) {
            var g, h = null,
                l = null;
            g = b.match(/^(https?:\/\/[^/]+)(\/.*)$/) ? RegExp.$2 : "";
            for (var k = 0; k < a.length; k++) if (h = a[k], g.match(h.regex)) {
                    l = h.destinationUriBuilder.call(c, g, e);
                    break
                }
            null === l && (l = c.currentKeepQS(g, e));
            return l
        }
    }
}();
Handlebars.registerHelper("formatDate", function (a) {
    return DateHelpers.format(a, "m/d/Y")
});
Handlebars.registerHelper("formatDateTime", function (a) {
    return 864E13 < a ? "\u221e" : DateHelpers.format(a)
});
Handlebars.registerHelper("formatDateTimeWithSeconds", function (a) {
    return DateHelpers.formatWithSeconds(a)
});
Handlebars.registerHelper("formatPrice", function (a) {
    return null === a || void 0 === a || isNaN(a) ? "N/A" : "$" + a.toFixed(2)
});
Handlebars.registerHelper("displayGB", function (a) {
    var b = null;
    if (void 0 === a) return "";
    1024 < a ? (a = (a / 1024).toFixed(0), b = "TB") : 1 > a ? (a = (1024 * a).toFixed(0), b = "MB") : (a = a.toFixed(0), b = "GB");
    return new Handlebars.SafeString("" + a + "<span class='units'>" + b + "</span>")
});
MMS.Collections.PaginationMixin = {
    paginationStartTimestamp: void 0,
    paginationItemCount: void 0,
    paginationCurrentOffset: 0,
    paginationPageSize: 100,
    setPaginationItemCount: function (a) {
        this.paginationItemCount = a
    },
    setPaginationPageSize: function (a) {
        this.paginationPageSize = a
    },
    setPaginationStartTimestamp: function (a) {
        this.paginationStartTimestamp = a
    },
    hasMorePages: function () {
        return this.paginationCurrentOffset < this.paginationItemCount
    },
    fetchPage: function () {
        var a = this.fetch.apply(this, arguments);
        this.paginationCurrentOffset =
            Math.min(this.paginationItemCount, this.paginationCurrentOffset + this.paginationPageSize);
        return a
    }
};
var PiwikHelpers = function () {
    return {
        trackGoal: function (a) {
            window._paq && window._paq.push(["trackGoal", a])
        },
        trackGoalAndRedirect: function (a, b) {
            window._paq ? (window._paq.push(["trackGoal", a]), window._paq.push([function () {
                    setTimeout(function () {
                        window.location = b
                    }, 750)
                }])) : window.location = b
        }
    }
}();
MMS.Models.ValidationMixin = {
    validate: function (a, b) {
        var e = {};
        if (MMS.Globals.VALIDATE_BACKBONE_MODELS && (this.onValidate(this.validations, e), !_.isEmpty(e))) return e
    },
    validations: {
        notNull: function (a, b, e) {
            e[a] || null === b && (e[a] = "should not be null")
        },
        notUndefined: function (a, b, e) {
            e[a] || void 0 === b && (e[a] = "should not be undefined")
        },
        notBlank: function (a, b, e) {
            e[a] || 0 === $.trim(b).length && (e[a] = "should not be blank")
        },
        isNumeric: function (a, b, e, c) {
            if (!c[a]) {
                if (!_.isNumber(b) || _.isNaN(b)) c[a] = "should be a number";
                void 0 !== e.min && b < e.min && (c[a] = "should be >= " + e.min);
                void 0 !== e.max && b > e.max && (c[a] = "should be <= " + e.max)
            }
        },
        sizeBounds: function (a, b, e, c) {
            c[a] || (void 0 !== e.min && b.length < e.min && (c[a] = "should have length >= " + e.min), void 0 !== e.max && b.length > e.max && (c[a] = "should have length <= " + e.max))
        },
        validCollection: function (a, b, e) {
            !e[a] && b && b.each(function (b, d) {
                b.isValid() || (e[a] = "should be valid")
            })
        },
        valid: function (a, b, e) {
            !e[a] && b && (b.isValid() || (e[a] = "should be valid"))
        }
    }
};
MMS.Views.EditAdminUserDialog = MMS.Views.Dialog.extend({
    el: "#editAdminUserDialog",
    initialize: function (a) {
        MMS.Views.Dialog.prototype.initialize.call(this, a);
        Backbone.on("adminUserEdit:update", this.update, this);
        Backbone.on("adminUserEdit:success", this.hide, this)
    },
    hide: function () {
        this.undelegateEvents();
        Backbone.off("adminUserEdit:update");
        Backbone.off("adminUserEdit:success");
        this.$el.modal("hide");
        return this
    },
    update: function () {
        var a = this,
            b = [],
            e = [];
        showLoading();
        for (var c in this.model.newRoles) this.model.newRoles.hasOwnProperty(c) &&
                (e.push(c), b.push(this.model.newRoles[c]));
        $.ajax({
            url: "/admin/editUser",
            type: "POST",
            data: JSON.stringify({
                username: this.model.username,
                roles: b,
                groups: e,
                phone: this.model.newPhone,
                email: this.model.newEmail,
                isLocked: this.model.isLocked,
                isMmsAdmin: this.model.isMmsAdmin,
                isBackupAdmin: this.model.isBackupAdmin
            }),
            dataType: "json",
            contentType: "application/json",
            success: function (b) {
                hideLoading();
                "OK" == b.status ? (a.hide(), window.location.reload()) : a.error(b.resource)
            },
            error: function (b) {
                hideLoading();
                a.error(MMS.i18n.httpErrorMsg(b.status))
            }
        })
    },
    _firstStep: function () {
        return "editAdminUser"
    }
});
MMS.Views.EditAdminUserDialogEditStep = MMS.Views.Dialog.extend({
    events: {
        "change #phone_for_edit": "phoneChanged",
        "change #email_for_edit": "emailChanged",
        "change .role-select": "rolesChanged",
        "change #is_locked_for_edit": "isLockedChanged",
        "change #mms_admin_for_edit": "isMmsAdminChanged",
        "change #backup_admin_for_edit": "isBackupAdminChanged"
    },
    initialize: function () {
        showLoading();
        var a = {
            username: this.model.username
        };
        $dialog = this;
        $.ajax({
            async: !1,
            url: "/admin/getUserDetails",
            type: "GET",
            data: $.param(a),
            dataType: "json",
            success: function (a) {
                hideLoading();
                "OK" == a.status ? (responseData = JSON.parse(a.resource), $dialog.model.roleGroupPairs = responseData.roleGroupPairs, $dialog.model.email = responseData.email, $dialog.model.phone = responseData.phone, $dialog.model.isLocked = responseData.isLocked, $dialog.model.isMmsAdmin = responseData.isMmsAdmin, $dialog.model.isBackupAdmin = responseData.isBackupAdmin) : $dialog.model.error = "USERNAME_NOT_FOUND" == a.errorCode ? a.resource : MMS.i18n.templateServerErrorMsg
            },
            error: function (a) {
                hideLoading();
                $dialog.model.error = MMS.i18n.templateServerErrorMsg
            }
        })
    },
    rolesChanged: function (a) {
        this.model.newRoles || (this.model.newRoles = {});
        var b = $(a.currentTarget).data("group");
        a = $(a.currentTarget).val();
        this.model.newRoles[b] = a
    },
    phoneChanged: function (a) {
        this.model.newPhone = $(a.currentTarget).val()
    },
    emailChanged: function (a) {
        this.model.newEmail = $(a.currentTarget).val()
    },
    isLockedChanged: function (a) {
        this.model.isLocked = $(a.currentTarget).is(":checked")
    },
    isMmsAdminChanged: function (a) {
        this.model.isMmsAdmin = $(a.currentTarget).is(":checked")
    },
    isBackupAdminChanged: function (a) {
        this.model.isBackupAdmin = $(a.currentTarget).is(":checked")
    },
    titleText: function () {
        return "Edit User: " + this.model.username
    },
    proceed: function (a) {
        Backbone.trigger("adminUserEdit:update");
        return this
    },
    render: function () {
        if (this.model.error) this.error(this.model.error), $("#editUserForm").remove();
        else {
            var a = (0, Handlebars.templates["admin/editUserDetails.hbs"])({
                roleGroupPairs: this.model.roleGroupPairs
            }),
                b = this.$el.find("#role_group_container");
            b.html(a);
            for (var e in this.model.roleGroupPairs) b.find("#" +
                    this.model.roleGroupPairs[e].groupid + " option#" + this.model.roleGroupPairs[e].role).attr("selected", "selected");
            $("#email_for_edit").val(this.model.email);
            $("#phone_for_edit").val(this.model.phone);
            $("#is_locked_for_edit").prop("checked", this.model.isLocked);
            $("#mms_admin_for_edit").prop("checked", this.model.isMmsAdmin);
            $("#backup_admin_for_edit").prop("checked", this.model.isBackupAdmin)
        }
    }
});

function hasData(a) {
    if (1E3 < a.length) return !0;
    try {
        return a.match(/\n[^\n]*\n/)
    } catch (b) {
        return !1
    }
}
(function () {
    MMS.bindAdminUserEvents = function (a) {
        $(".adminUsersTableContainer").on("click", ".editAdminUserButton", function (a) {
            a.preventDefault();
            a = $(a.currentTarget).val();
            a = new MMS.Views.EditAdminUserDialog({
                model: {
                    username: a,
                    requireMultiAuth: !1
                },
                config: {
                    steps: [{
                            id: "editAdminUser",
                            next_button: "Save",
                            next_step: "Finalize Request",
                            prev_step: null,
                            viewClass: MMS.Views.EditAdminUserDialogEditStep
                        }]
                }
            });
            a.render();
            a.show()
        })
    }
})();
MMS.drawAdminGlobalChartRequests = function (a, b, e) {
    function c(a) {
        return a.toLocaleString()
    }
    showLoading();
    var d = "/admin/floatingTimeLineChartRequests/" + encodeURIComponent(MMS.Globals.TIME_ZONE_ID) + "/180/daily";
    $.ajax({
        url: d,
        global: !1,
        type: "GET",
        success: function (d) {
            hasData(d) ? new Dygraph(document.getElementById(a), d, {
                labelsSeparateLines: !1,
                width: b,
                height: e,
                fractions: !1,
                wilsonInterval: !1,
                includeZero: !0,
                showRoller: !1,
                fillGraph: !0,
                labelsDiv: document.getElementById(a + "Label"),
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                axisLabelFontSize: 12,
                avoidMinZero: !0,
                labelsKMB: !0,
                colors: ["#699CC7"],
                axis: {
                    x: {
                        axisLabelFormatter: Dygraph.dateAxisFormatter
                    },
                    y: {
                        valueFormatter: c
                    }
                }
            }) : document.getElementById(a).innerHTML = '<br /<br /><br /><div style="text-align:center">No data available.</div>';
            hideLoading()
        }
    })
};
MMS.drawAdminGlobalPageViews = function (a, b, e) {
    function c(a) {
        return a.toLocaleString()
    }
    showLoading();
    var d = "/admin/floatingTimeLinePageViews/" + encodeURIComponent(MMS.Globals.TIME_ZONE_ID) + "/180/daily";
    $.ajax({
        url: d,
        global: !1,
        type: "GET",
        success: function (d) {
            hasData(d) ? new Dygraph(document.getElementById(a), d, {
                labelsSeparateLines: !1,
                width: b,
                height: e,
                fractions: !1,
                wilsonInterval: !1,
                includeZero: !0,
                showRoller: !1,
                fillGraph: !0,
                labelsDiv: document.getElementById(a + "Label"),
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                axisLabelFontSize: 12,
                avoidMinZero: !0,
                labelsKMB: !0,
                colors: ["#699CC7"],
                axis: {
                    x: {
                        axisLabelFormatter: Dygraph.dateAxisFormatter
                    },
                    y: {
                        valueFormatter: c
                    }
                }
            }) : document.getElementById(a).innerHTML = '<br /<br /><br /><div style="text-align:center">No data available.</div>';
            hideLoading()
        }
    })
};
MMS.Globals.CURRENT_HOST_ID = null;
MMS.Globals.CURRENT_HOST_DB = null;
MMS.Globals.CURRENT_RECORD_STATS_HOST_DB = null;
$(document).ready(function () {
    $(".nav-show-hide").click(function () {
        $this = $(this);
        if ($.support.transition && $.support.transition.end) $this.one($.support.transition.end, function (a) {
                window.dispatchEvent(new Event("resize"))
            });
        $this.hasClass("collapsed") ? ($this.removeClass("collapsed"), $this.children(".icon-caret-right").each(function () {
            $(this).addClass("icon-caret-left");
            $(this).removeClass("icon-caret-right")
        }), $(".side-sub-nav").removeClass("collapsed"), $("#wrapper").removeClass("nav-collapsed")) : ($this.addClass("collapsed"),
            $this.children(".icon-caret-left").each(function () {
            $(this).removeClass("icon-caret-left");
            $(this).addClass("icon-caret-right")
        }), $(".side-sub-nav").addClass("collapsed"), $("#wrapper").addClass("nav-collapsed"))
    });
    $(".with-tooltip").tooltip();
    $(".tip").tooltip();
    $(".new-feature").click(function () {
        $(this).addClass("open")
    })
});

function insertErrorMessage(a, b) {
    b ? (hideLoading(), $("#" + a).html('<div class="alert alert-danger"><i class="icon-warning-sign"></i> ' + b + "</div>").show("fade")) : $("#" + a).html("").hide("fade")
}

function findStuff() {
    $("#findValue").attr("value", "");
    $("#findStuffResults").contents().remove();
    $("#findStuffContainer").modal({
        show: !0
    })
}
(function (a) {
    function b(b, d) {
        var f = d.rsId;
        "" !== f && a.getJSON("/backup/status/" + MMS.Globals.GROUP_ID, function (a) {
            a.replicaSets && 0 < a.replicaSets.length && (null === f ? e(b, a.replicaSets) : c(b, f, a.replicaSets))
        })
    }

    function e(a, b) {
        var c = _.filter(b, function (a) {
            return -1 == g.indexOf(a.status)
        });
        0 === c.length ? a.html('<i class="icon-ok"></i> All replica sets backed up').show() : d(a, c.length)
    }

    function c(a, b, c) {
        void 0 !== _.find(c, function (a) {
            return a.rsId === b && -1 !== g.indexOf(a.status)
        }) ? a.html('<i class="icon-ok"></i> backed up').show() :
            a.html(['<i class="icon-info-sign"></i> ', f()].join("")).show()
    }

    function d(a, b) {
        a.html(['<i class="icon-info-sign"></i> ', "<strong>" + b + "</strong>", " ", 1 === b ? "replica set" : "replica sets", " ", f()].join("")).show()
    }

    function f() {
        return '<strong><a href="/backup">not backed up</a></strong>'
    }
    a.backup_status_widget = function (c, d) {
        this.options = {};
        this.init = function (c, d) {
            this.element = c;
            this.options = a.extend({}, a.backup_status_widget.defaultOptions, d);
            b(c, this.options)
        };
        this.init(c, d)
    };
    a.fn.backup_status_widget = function (b) {
        return this.each(function () {
            new a.backup_status_widget(a(this), b)
        })
    };
    var g = ["STARTED", "ENABLED_AS_SHARD"];
    a.backup_status_widget.defaultOptions = {
        rsId: null
    }
})(jQuery);
(function (a) {
    function b(b, c) {
        var d = b.find(".dropdown-toggle");
        d.dropdown();
        b.on("click", ".dropdown-menu a", function (f) {
            f.preventDefault();
            var g = a(f.target);
            f = g.text();
            var g = g.data("value"),
                h = b.find(".dropdown-toggle-value");
            h.data("value", g);
            h.text(f);
            b.trigger("selected", [c, g]);
            d.focus()
        })
    }
    a.bootstrap_dropdown_select = function (e, c) {
        this.element = e;
        this.options = {};
        this.init = function (c, e) {
            this.options = a.extend({}, a.bootstrap_dropdown_select.defaultOptions, e);
            b(c, this)
        };
        this.init(e, c)
    };
    a.fn.bootstrap_dropdown_select = function (b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("dropdown"),
                f = "object" == typeof b && b;
            d || c.data("dropdown", d = new a.bootstrap_dropdown_select(c, f));
            if ("string" == typeof b) d[b]()
        })
    };
    a.bootstrap_dropdown_select.prototype.getName = function () {
        return this.element.data("name")
    };
    a.bootstrap_dropdown_select.prototype.getValue = function () {
        var b = this.element.find(".dropdown-toggle-value");
        return a.trim(b.data("value"))
    };
    a.bootstrap_dropdown_select.defaultOptions = {}
})(jQuery);
Handlebars.registerHelper("createBootstrapDropdownSelect", function (a, b, e, c, d) {
    a = ['<div data-name="' + a + '" class="' + d + '">', '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#">', '<span class="dropdown-toggle-value" data-value="' + b + '">', e, '</span> <i class="icon-caret-down"></i></a><ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">', function () {
            return _.map(c, function (a) {
                return '<li><a href="#" data-value="' + a.value + '">' + a.name + "</a></li>"
            }).join("")
        }(), "</ul></div>"].join("");
    return new Handlebars.SafeString(a)
});
(function (a) {
    function b(b, d) {
        b.on("click", "a", function (b) {
            b.preventDefault();
            a(this).tab("show");
            d.useLocationHash && window._paq && window._paq.push(["trackPageView", location.pathname + location.search + location.hash])
        });
        b.on("show.bs.tab", "a", function (e) {
            var g = a(e.target);
            e = g.data("target");
            var h = g.data("tabname"),
                l = (g = g.attr("href")) && g.replace(/.*(?=#[^\s]*$)/, "");
            d.loader && d.loader.show(h);
            d.useLocationHash && 0 < b.find(".active").length && (window.location.hash = h);
            if (l && "#" !== l.charAt(0)) {
                var k = a(e);
                a.ajax({
                    url: g,
                    async: !1
                }).done(function (a) {
                    k.html(a)
                })
            }
        });
        b.on("shown.bs.tab", "a", function (e) {
            var g = a(e.relatedTarget),
                h = g.data("target"),
                l = a(e.currentTarget).data("tabname");
            e = a(e.currentTarget).data("loaderhide");
            g = (g = g.attr("href")) && g.replace(/.*(?=#[^\s]*$)/, "");
            d.loader && !1 !== e && d.loader.hide(l);
            g && "#" !== g.charAt(0) && a(h).html("");
            h = _.isEmpty(a(this).data("title")) ? a(this).text() : a(this).data("title");
            a(a(b).data("titletarget")).text(h)
        })
    }
    var e = function (c, d) {
        this.options = {};
        this.init = function (c, d) {
            this.options =
                a.extend({}, e.defaultOptions, d);
            b(c, this.options);
            a: if (this.options.useLocationHash) {
                if (window.location.hash && null !== window.location.hash && "" !== window.location.hash) {
                    var h = window.location.hash.substring(1),
                        h = c.find('a[data-tabname="' + h + '"]');
                    if (0 < h.length) {
                        h.tab("show");
                        break a
                    }
                }
                c.find("a:first").tab("show")
            }
        };
        this.init(c, d)
    };
    a.fn.bootstrap_tabs = function (b) {
        return this.each(function () {
            var d = a(this),
                f = d.data("bootstrap_tabs");
            f || d.data("bootstrap_tabs", f = new e(d, b));
            "string" == typeof b && f[b].apply(d,
                null)
        })
    };
    e.defaultOptions = {
        useLocationHash: !0,
        loader: {
            show: function (a) {
                showLoading()
            },
            hide: function (a) {
                hideLoading()
            }
        }
    }
})(jQuery);
$(document).ready(function () {
    $("#findStuffLink").click(function (a) {
        findStuff()
    });
    $("#findStuffForm").submit(function (a) {
        a.preventDefault();
        showLoading();
        (a = $("#findValue").val()) && "" !== a && $.getJSON("/user/search?q=" + encodeURIComponent(a), function (a) {
            a = a.users;
            if (!a || 0 === a.length) $("#findStuffResults").html("<span>No results found</span>");
            else {
                for (var b = '<table border="1"><tbody><tr><td>username</td><td>email</td><td>group(s)</td></tr>', e = 0; e < a.length; e++) {
                    for (var g = a[e], b = b + "<tr><td>", b = b + g.username,
                            b = b + "</td><td>", b = b + g.email, b = b + "</td><td>", h = 0; h < g.groups.length; h++) b += '<a href="https://mms.mongodb.com/host/list/' + g.groups[h].id + '">', b += g.groups[h].name, b += "</a> ";
                    b += "</td></tr>"
                }
                $("#findStuffResults").html(b + "</tbody></table>")
            }
            hideLoading()
        })
    });
    $("#showActualHostnamesButton").click(function (a) {
        window.location = "/host/list/" + MMS.Globals.GROUP_ID + "?noAlias=true"
    });
    $("#feedbackModal").on("show.bs.modal", function () {
        $("#feedbackFormErrorMsgs .formError").hide()
    });
    $("#featureRequestSubmit").click(function (a) {
        a.preventDefault();
        a = $("#featureRequestSummary").val();
        var b = $("#featureRequestDescription").val();
        !a || "" === a ? insertErrorMessage("feedbackFormErrorMsgs", '"I Wish This Page" must not be blank') : ($("#featureRequestSubmit").attr("disabled", "disabled"), showLoading(), $.post("/user/submitJiraIssue", {
            summary: a,
            description: b,
            url: window.location.href
        }, function (a) {
            hideLoading();
            a = MMS.i18n.iWishThisPageConfirmationMsg.replace("TRACK_URL", "https://jira.mongodb.org/browse/" + a.issueId);
            $("#feedbackModal .modal-body").html(a);
            $("#featureRequestSubmit").remove();
            $("#feedbackModal .modal-footer").append('<button class="btn btn-primary" data-dismiss="modal">Close</button>')
        }).error(function (a) {
            insertErrorMessage("feedbackFormErrorMsgs", MMS.i18n.httpErrorMsg(a.status))
        }))
    });
    $("#supportTicketSubmit").click(function (a) {
        a.preventDefault();
        var b = $("#supportTicketSummary").val(),
            d = $("#supportTicketDescription").val(),
            f = $("#supportTicketProject").val();
        a = $("#supportTicketComponent").val() || null;
        !b || "" === b ? insertErrorMessage("supportTicketErrorMsgs", "Summary field must not be blank") : !d || "" === d ? insertErrorMessage("supportTicketErrorMsgs", "Details field must not be blank") : ($("#supportTicketSubmit").attr("disabled", "disabled"), showLoading(), b = {
            summary: b,
            description: d,
            project: f,
            url: window.location.href
        }, a && (b.component = a), $.post("/user/submitJiraIssue", b, function (a) {
            hideLoading();
            a = MMS.i18n.iWishThisPageConfirmationMsg.replace("TRACK_URL", "https://jira.mongodb.org/browse/" + a.issueId);
            $("#supportTicketSection").html('<div class="alert alert-info">' + a + "</div>")
        }).error(function (a) {
            insertErrorMessage("supportTicketErrorMsgs",
                MMS.i18n.httpErrorMsg(a.status))
        }))
    });
    $("#editCluster").click(function () {
        $(".formError").hide();
        var a = $(this).attr("value"),
            b = $(this).data("name");
        $("#editClusterId").val(a);
        $("#clusterName").val(b);
        $("#editClusterContainer").modal({
            show: !0
        })
    });
    $("#editClusterForm").submit(function (a) {
        a.preventDefault();
        $("#editClusterSubmit").attr("disabled", "disabled");
        $(".formError").hide();
        a = {
            clusterId: $("#editClusterId").val(),
            name: $("#clusterName").val()
        };
        $.ajax({
            url: "/host/editCluster/" + MMS.Globals.GROUP_ID,
            type: "POST",
            data: $.param(a),
            dataType: "json",
            success: function (a) {
                "OK" == a.status ? ($("#editClusterContainer").modal("hide"), window.location.reload()) : "SERVER_ERROR" == a.errorCode ? insertErrorMessage("editClusterFormErrorMsgs", MMS.i18n.templateServerErrorMsg) : "INVALID_NAME" == a.errorCode && insertErrorMessage("editClusterFormErrorMsgs", MMS.i18n.clusterInvalidClusterNameErrorMsg);
                $("#editClusterSubmit").removeAttr("disabled")
            },
            error: function (a) {
                insertErrorMessage("editClusterFormErrorMsgs", MMS.i18n.httpErrorMsg(a.status));
                $("#editClusterSubmit").removeAttr("disabled")
            }
        })
    });
    $(".clusterHostType").click(function () {
        setClusterHostType($(this).attr("title"));
        var a = $("#clusterChartId option:selected");
        drawClusterCharts(a.attr("id"))
    });
    $("#shardedCollectionsSelect").change(function () {
        var a = $("#shardedCollectionsSelect option:selected").attr("id");
        $("#test").text(a)
    });
    $("#reactivateAllHosts").click(function () {
        showLoading();
        $.getJSON("/host/reactivateHosts/" + MMS.Globals.GROUP_ID, function (a) {
            window.location.reload()
        })
    });
    $("#addHost").click(function () {
        $(".formError").hide();
        $("#addHostContainer").modal({
            show: !0
        })
    });
    var a = {
        standalone: ["hostname", "port"],
        rs: ["hostname of the primary", "port of the primary"],
        cluster: ["hostname of a mongos", "port of a mongos"],
        masterslave: ["hostname of the master", "port of the master"]
    };
    $("#hostType").change(function (b) {
        b = $(this).val();
        a[b] && ($("#internalHostname").attr("placeholder", a[b][0]), $("#agentPort").attr("placeholder", a[b][1]))
    });
    $("#addHostForm").submit(function (a) {
        a.preventDefault();
        $("#addHostSubmit").attr("disabled", "disabled");
        $("#addHostFormErrorMsgs").html("");
        $.post("/host/addHost/" + MMS.Globals.GROUP_ID, $("#addHostForm").serialize(), function (a) {
            "OK" == a.status ? ($("#addHostContainer").modal("hide"), window.location.reload()) : "SERVER_ERROR" == a.errorCode ? insertErrorMessage("addHostFormErrorMsgs", MMS.i18n.templateServerErrorMsg) : "INVALID_HOSTNAME" == a.errorCode ? insertErrorMessage("addHostFormErrorMsgs", MMS.i18n.addHostInvalidHostnameErrorMsg) : "INVALID_USERNAME" == a.errorCode ? insertErrorMessage("addHostFormErrorMsgs", MMS.i18n.addHostInvalidUsernameErrorMsg) :
                "INVALID_PASSWORD" == a.errorCode ? insertErrorMessage("addHostFormErrorMsgs", MMS.i18n.addHostInvalidPasswordErrorMsg) : "DUPLICATE_HOST" == a.errorCode ? insertErrorMessage("addHostFormErrorMsgs", MMS.i18n.addHostDuplicateNameErrorMsg) : "INVALID_HOST_PORT" == a.errorCode && insertErrorMessage("addHostFormErrorMsgs", MMS.i18n.addHostInvalidPortErrorMsg)
        }, "json").error(function (a) {
            insertErrorMessage("addHostFormErrorMsgs", MMS.i18n.httpErrorMsg(a.status))
        });
        $("#addHostSubmit").removeAttr("disabled")
    });
    $("#deleteHostForm").submit(function (a) {
        a.preventDefault();
        a = {
            hostId: $("#deleteHostId").val()
        };
        $.ajax({
            url: "/host/delete/" + MMS.Globals.GROUP_ID,
            type: "POST",
            data: $.param(a),
            dataType: "json",
            success: function (a) {
                "OK" == a.status ? ($("#deleteHostContainer").modal("hide"), window.location.reload(!0)) : "CANNOT_DELETE_HOST_BACKUP_ENABLED" == a.errorCode ? insertErrorMessage("deleteHostFormErrorMsgs", MMS.i18n.deleteHostBackupErrorMsg) : insertErrorMessage("deleteHostFormErrorMsgs", MMS.i18n.templateServerErrorMsg)
            },
            error: function (a) {
                insertErrorMessage("deleteHostFormErrorMsgs",
                    MMS.i18n.httpErrorMsg(a.status))
            }
        })
    });
    $("#chartEmailSubmit").click(function (a) {
        showLoading();
        a.preventDefault();
        a = encodeURIComponent($("#chartEmailAddr").val());
        var b = encodeURIComponent($("#chartEmailMsg").val()),
            d = encodeURIComponent($("#chartEmailQueryUrl").val()),
            f = encodeURIComponent($("#chartEmailHostId").val()),
            g = encodeURIComponent($("#chartEmailChartId").val());
        $.getJSON("/chart/emailChart/" + MMS.Globals.GROUP_ID + "?chartParams=" + d + "&toAddr=" + a + "&hostId=" + f + "&chartId=" + g + "&msg=" + b, function (a) {
            hideLoading();
            "OK" == a.status ? $("#chartEmailDialog").modal("hide") : "SERVER_ERROR" == a.errorCode ? insertErrorMessage("emailChartFormErrorMsgs", MMS.i18n.templateServerErrorMsg) : "INVALID_EMAIL_ADDR" == a.errorCode && insertErrorMessage("emailChartFormErrorMsgs", MMS.i18n.emailChartInvalidEmailErrorMsg)
        }).error(function (a) {
            insertErrorMessage("emailChartFormErrorMsgs", MMS.i18n.httpErrorMsg(a.status))
        });
        $("#chartEmailSubmit").removeAttr("disabled")
    });
    $("#deleteDashboardForm").submit(function (a) {
        a.preventDefault();
        a = $("#deleteDashboardId").val();
        $.getJSON("/dashboard/deleteDashboard/" + a + "/" + MMS.Globals.GROUP_ID, function (a) {
            $("#deleteDashboardContainer").modal("hide");
            window.location = "/dashboard/view/" + MMS.Globals.GROUP_ID
        })
    });
    $("#addDashboardForm").submit(function (a) {
        a.preventDefault();
        $("#addDashboardSubmit").attr("disabled", "disabled");
        $(".formError").hide();
        $.getJSON("/dashboard/addDashboard/" + MMS.Globals.GROUP_ID + "?name=" + encodeURIComponent($("#name").val()) + "&insert=" + $("#insert").val() + "&dashboardId=" + $("#dashboardId").val(), function (a) {
            "OK" ==
                a.status ? ($("#addDashboardContainer").modal("hide"), window.location = "/dashboard/view/" + MMS.Globals.GROUP_ID + "?did=" + a.newObjId) : "SERVER_ERROR" == a.errorCode ? insertErrorMessage("addDashboardFormErrorMsgs", MMS.i18n.templateServerErrorMsg) : "INVALID_DASHBOARD_NAME" == a.errorCode ? insertErrorMessage("addDashboardFormErrorMsgs", MMS.i18n.dashboardInvalidNameErrorMsg) : "DUPLICATE_DASHBOARD_NAME" == a.errorCode && insertErrorMessage("addDashboardFormErrorMsgs", MMS.i18n.dashboardDuplicateNameErrorMsg)
        }).error(function (a) {
            insertErrorMessage("addDashboardFormErrorMsgs",
                MMS.i18n.httpErrorMsg(a.status))
        });
        $("#addDashboardSubmit").removeAttr("disabled")
    });
    $("#addChartToDashboard").click(function () {
        var a = $("#chartDetailDashboardSelect option:selected").val(),
            b = $("#chartDetailChartId").val(),
            d = $("#chartDetailHostId").val();
        $.getJSON("/dashboard/addChartToDashboard/" + d + "/" + a + "/" + b + "/" + MMS.Globals.GROUP_ID, function (a) {
            "OK" == a.status && $("#chartDetailDialog").modal("hide")
        })
    });
    $("#addToDashboardDashboardSelect").change(function () {
        $(".formError").hide();
        "internalNewDashboardOption" ==
            $("#addToDashboardDashboardSelect option:selected").val() ? $("#addToDashboardNewContainer").show() : $("#addToDashboardNewContainer").hide()
    });
    $("#addChartToDashboardDialogSubmit").click(function () {
        $(".formError").hide();
        var a = $("#addToDashboardDashboardSelect option:selected").val(),
            b = $("#addToDashboardChartId").val(),
            d = $("#addToDashboardHostId").val();
        showLoading();
        d || (d = MMS.Globals.CURRENT_HOST_ID);
        "internalNewDashboardOption" == a ? (a = $("#addToDashboardNew").val(), $.getJSON("/dashboard/addChartToNewDashboard/" +
            d + "/" + b + "/" + MMS.Globals.GROUP_ID + "?name=" + encodeURIComponent(a), function (a) {
            "OK" == a.status ? ($("#addChartToDashboardContainer").modal("hide"), window.location.reload()) : "SERVER_ERROR" == a.errorCode ? insertErrorMessage("addDashboardFormErrorMsgs", MMS.i18n.templateServerErrorMsg) : "INVALID_DASHBOARD_NAME" == a.errorCode ? insertErrorMessage("addDashboardFormErrorMsgs", MMS.i18n.dashboardInvalidNameErrorMsg) : "DUPLICATE_DASHBOARD_NAME" == a.errorCode && insertErrorMessage("addDashboardFormErrorMsgs", MMS.i18n.dashboardDuplicateNameErrorMsg)
        }).error(function (a) {
            insertErrorMessage("addDashboardFormErrorMsgs",
                MMS.i18n.httpErrorMsg(a.status))
        })) : $.getJSON("/dashboard/addChartToDashboard/" + d + "/" + a + "/" + b + "/" + MMS.Globals.GROUP_ID, function (a) {
            "OK" == a.status && ($("#addChartToDashboardContainer").modal("hide"), window.location.reload())
        })
    });
    $("#timeZoneIdDialogSelect").change(function () {
        var a = $("#timeZoneIdDialogSelect option:selected").val();
        "BROWSER" != a && (showLoading(), $.ajax({
            url: "/settings/updateTimeZoneId/" + encodeURIComponent(a),
            data: $.param({
                disp: $(this).find("option:selected").data("display")
            }),
            success: function () {
                hideLoading();
                $("#timeZoneChangeContainer").modal("hide");
                window.location.reload()
            }
        }))
    });
    $("#currentTimeZone").on("timeZoneChanged", function (a, b) {
        var d = $(this);
        d.html(['<a href="#changeTimeZone" class="changeTimeZone tip" data-placement="bottom"', 'data-original-title="User timezone is set to ' + b.timeZoneDisp + '">', '<i class="icon-time"></i> ' + b.timeZoneDisp, "</a>"].join(""));
        d.find(".tip").tooltip({})
    });
    $("#addPreferredHostnameButton").click(function () {
        $("#addPreferredHostnameContainer").modal({
            show: !0
        })
    });
    $("#addPreferredHostnameType .btn").button();
    $("#addPreferredHostnameType .btn").on("click", function () {
        $("#radioType").val($(this).data("type"))
    });
    $(".deletePreferredHostname").click(function () {
        $.getJSON("/settings/deletePreferredHostname/" + MMS.Globals.GROUP_ID + "/" + $(this).attr("value"), function (a) {
            window.location.reload(!0)
        })
    });
    $("#addPreferredHostnameForm").submit(function (a) {
        a.preventDefault();
        showLoading();
        var b = $("#radioType").val();
        a = "regexp" === b;
        var b = "endsWith" === b,
            d = $("#insert").val(),
            f = encodeURIComponent($("#value").val()),
            g = $("#objId").val();
        $.getJSON("/settings/setPreferredHostname/" + MMS.Globals.GROUP_ID + "/" + d + "/" + a + "/" + b + "?value=" + f + "&oid=" + g, function (a) {
            "OK" == a.status ? window.location.reload(!0) : "SERVER_ERROR" == a.errorCode ? insertErrorMessage("addPreferredHostnameErrorMessages", MMS.i18n.templateServerErrorMsg) : "VALUE_NOT_SET" == a.errorCode ? insertErrorMessage("addPreferredHostnameErrorMessages", MMS.i18n.settingsPreferredHostnameValueError) : "INVALID_REGEXP" == a.errorCode && insertErrorMessage("addPreferredHostnameErrorMessages", MMS.i18n.settingsPreferredHostnameRegexpError)
        }).error(function (a) {
            insertErrorMessage("addPreferredHostnameErrorMessages",
                MMS.i18n.httpErrorMsg(a.status))
        })
    });
    var b = !1;
    $("#currentTimeZone").on("click", ".changeTimeZone", function () {
        if (!b) {
            var a = _.sortBy(MMS.Globals.TZ, function (a) {
                return a.off
            });
            _.each(a, function (a) {
                var b = 0 < a.off ? "+" : "-",
                    e = Math.abs(a.off),
                    g = Math.floor(e),
                    e = 60 * (e - Math.floor(e));
                10 > g && (g = "0" + g);
                10 > e && (e = "0" + e);
                b = "(" + b + g + ":" + e + ")";
                $("<option/>").val(a.can).data("display", a.disp).text(b + " " + a.disp).appendTo($("#timeZoneIdDialogSelect"))
            });
            b = !0
        }
        null !== MMS.Globals.TIME_ZONE_ID && $("#timeZoneIdDialogSelect option").each(function () {
            $(this).val() ===
                MMS.Globals.TIME_ZONE_ID && $(this).data("display") === MMS.Globals.TIME_ZONE_DISPLAY && $(this).prop("selected", !0)
        });
        $("#timeZoneChangeContainer").modal({
            show: !0
        })
    });
    (function () {
        var a = $("#hostHeader");
        if (a.length) {
            var b = $("#fixedHostHeader"),
                d = b.find("#fixedHostHeaderContainer");
            isFixed = !1;
            $(window).scroll(function () {
                var f = a.offset().top - 50;
                $(window).scrollTop() > f ? isFixed || (MMS.Globals.CHART_EPOCH_CONTROLS_VIEW.close(), d.html(a.html()), MMS.Globals.CHART_EPOCH_CONTROLS_VIEW = new MMS.Views.ChartEpochControlsView({
                    model: MMS.Globals.CHART_EPOCH_CONTROLS
                }),
                    b.find(".chartEpochControls").html(MMS.Globals.CHART_EPOCH_CONTROLS_VIEW.render().el), b.show(), isFixed = !0) : isFixed && (MMS.Globals.CHART_EPOCH_CONTROLS_VIEW.close(), MMS.Globals.CHART_EPOCH_CONTROLS_VIEW = new MMS.Views.ChartEpochControlsView({
                    model: MMS.Globals.CHART_EPOCH_CONTROLS
                }), a.find(".chartEpochControls").html(MMS.Globals.CHART_EPOCH_CONTROLS_VIEW.render().el), b.hide(), isFixed = !1)
            })
        }
    })()
});
(function () {
    function a() {
        showLoading();
        $("#editHostTabs").bootstrap_tabs({
            useLocationHash: !1
        });
        var a = $.getJSON("/host/loadBasicHostInfo/" + MMS.Globals.GROUP_ID + "/" + k, function (a) {
            $("#actualHostnameAndPort").text(a.hostnameAndPort);
            e(a.username);
            $("#userAlias").val(a.alias);
            $("#editHostAlias .alert-success").hide()
        }),
            b = $.getJSON("/host/loadHostLabels/" + MMS.Globals.GROUP_ID + "/" + k, function (a) {
                var b = $(".hostLabelCheckbox");
                b.prop("checked", !1);
                b.each(function (b, c) {
                    var d = $(c).val();
                    $.each(a.labels, function (a,
                        b) {
                        if (b === d) return $(c).prop("checked", !0), !1
                    })
                })
            }),
            c = $.getJSON("/host/loadHostAlertStatus/" + MMS.Globals.GROUP_ID + "/" + k, function (a) {
                $("#editHostAlertStatusButton").bootstrapSwitch("setState", !a.disabled, !0)
            }),
            d = $.getJSON("/host/loadHostLogStatus/" + MMS.Globals.GROUP_ID + "/" + k, function (a) {
                $("#editHostLogButton").bootstrapSwitch("setState", a.enabled, !0)
            }),
            f = $.getJSON("/host/sslEnabled/" + MMS.Globals.GROUP_ID + "/" + k, function (a) {
                $("#editHostSslEnabledButton").bootstrapSwitch("setState", a.sslEnabled, !0)
            });
        $.getJSON("/host/profilingEnabled/" + MMS.Globals.GROUP_ID + "/" + k, function (a) {
            $("#editProfilingButton").bootstrapSwitch("setState", a.profilingEnabled, !0)
        });
        $.when(a, b, c, d, f).then(function () {
            hideLoading();
            $("#editHostContainer").modal({
                show: !0
            })
        })
    }

    function b() {
        $("#editHostContainer").on("click", "#editHostChange", function (a) {
            $("#editHostFormCurrentCredentials").fadeOut(250, function () {
                $("#editHostFormNewCredentials").fadeIn(250)
            })
        });
        $("#editHostContainer").on("click", "#editHostRemove", function (a) {
            $('#editHostForm input[id^="editHostNew"]').val("");
            $("#editHostForm").submit()
        });
        $("#editHostContainer").on("keyup", '#editHostForm input[id^="editHostNew"]', function (a) {
            $("#editHostNewDbUsername").val() && $("#editHostNewDbPassword").val() ? $("#editHostSubmit").removeAttr("disabled") : $("#editHostSubmit").attr("disabled", "disabled")
        });
        $("#editHostForm").common_form({
            uiMapping: {
                username: "#editHostNewDbUsername",
                password: "#editHostNewDbPassword"
            },
            handler: function (a, b, c) {
                $.ajax({
                    url: "/host/editHost/" + MMS.Globals.GROUP_ID,
                    type: "POST",
                    data: $.param({
                        hostId: k,
                        username: a.username,
                        password: a.password
                    }),
                    dataType: "json",
                    success: function (d) {
                        "OK" == d.status ? (p = !0, e(a.username), c()) : "SERVER_ERROR" == d.errorCode ? (b(MMS.i18n.templateServerErrorMsg), c()) : "INVALID_USERNAME" == d.errorCode ? (b(MMS.i18n.addHostInvalidUsernameErrorMsg), c()) : "INVALID_PASSWORD" == d.errorCode && (b(MMS.i18n.addHostInvalidPasswordErrorMsg), c())
                    },
                    error: function (a) {
                        b(MMS.i18n.httpErrorMsg(a.status));
                        c()
                    }
                });
                return !1
            }
        })
    }

    function e(a) {
        $("#editHostFormNewCredentials").hide();
        $("#editHostFormCurrentCredentials").show();
        $("#editHostSubmit").attr("disabled", "disabled");
        a ? ($("#editHostCurrentDbUsername").val(a), $("#editHostCurrentDbPassword").val("xxxxxxxx"), $("#editHostRemove").show()) : ($("#editHostCurrentDbUsername").val(""), $("#editHostCurrentDbPassword").val(""), $("#editHostRemove").hide())
    }

    function c() {
        $("#editHostAliasForm").common_form({
            uiMapping: {
                userAlias: "#userAlias"
            },
            handler: function (a, b, c) {
                $("#editHostAlias .alert-success").hide();
                $.ajax({
                    url: "/host/editHostAlias/" + MMS.Globals.GROUP_ID,
                    type: "POST",
                    data: $.param({
                        hostId: k,
                        userAlias: a.userAlias
                    }),
                    dataType: "json",
                    success: function (a) {
                        "OK" == a.status ? ($("#editHostAlias .alert-success").show(), p = !0, c()) : "SERVER_ERROR" == a.errorCode && (b(MMS.i18n.templateServerErrorMsg), c())
                    },
                    error: function (a) {
                        b(MMS.i18n.httpErrorMsg(a.status));
                        c()
                    }
                });
                return !1
            }
        })
    }

    function d() {
        $(".hostLabelCheckbox").click(function (a) {
            a = encodeURIComponent($(this).val());
            $.getJSON("/host/addRemoveLabel/" + MMS.Globals.GROUP_ID + "/" + k + "/" + $(this).prop("checked") + "?label=" + a, function (a) {
                p = !0
            })
        })
    }

    function f() {
        $("#editHostAlertStatusButton").on("switch-change", function (a, b) {
            $.getJSON("/host/changeAlertsEnabledDisabledForHost/" + MMS.Globals.GROUP_ID + "/" + k, function (a) {
                p = !0
            })
        })
    }

    function g() {
        $("#editHostLogButton").on("switch-change", function (a, b) {
            $.getJSON("/host/changeLogDataForHost/" + MMS.Globals.GROUP_ID + "/" + k, function (a) {
                p = !0
            })
        })
    }

    function h() {
        $("#editHostSslEnabledButton").on("switch-change", function (a, b) {
            $.getJSON("/host/enableDisableSsl/" + MMS.Globals.GROUP_ID + "/" + k + "/" + b.value, function (a) {
                p = !0
            })
        })
    }

    function l() {
        $("#editProfilingButton").on("switch-change", function (a, b) {
            $.getJSON((b.value ? "/host/enableProfiler/" : "/host/disableProfiler/") + MMS.Globals.GROUP_ID + "/" + k, function (a) {
                p = !0
            })
        })
    }
    var k, p = !1;
    MMS.bindEditHostDialogEvents = function () {
        $("#editHostContainer").on("hidden.bs.modal", function () {
            !0 === p && window.location.reload()
        });
        $(".hostsTableContainer").on("click", ".editHostButton", function () {
            k = $(this).data("value");
            a()
        });
        b();
        c();
        d();
        f();
        g();
        h();
        l()
    }
})();
(function () {
    function a() {
        $("#newLabel").val("");
        $("#hostLabelsForm .formErrorMsgs").hide();
        0 === b ? ($("#hostLabelZeroState").show(), $("#hostLabelTableContainer").hide()) : ($("#hostLabelZeroState").hide(), $("#hostLabelTableContainer").show())
    }
    var b, e = !1;
    MMS.bindHostLabelDialogEvents = function () {
        var c = $("#hostLabelsDialog");
        c.on("hidden.bs.modal", function () {
            !0 === e && window.location.reload()
        });
        $("#hostLabelSelector").html($("#hostLabelsMenu").html()).addClass("pull-left");
        $("#showEditLabelDialogBtn").on("click", function (d) {
            d.preventDefault();
            void 0 === b && (b = c.data("labelcount"));
            a();
            e = !1;
            c.modal({
                show: !0
            })
        });
        $("#hostLabelsForm").common_form({
            uiMapping: {
                newLabel: "#newLabel"
            },
            handler: function (c, f, g) {
                "" === $.trim(c.newLabel) ? (f("Label must not be empty."), g()) : $.getJSON("/host/addLabel/" + MMS.Globals.GROUP_ID + "?val=" + encodeURIComponent(c.newLabel), function (f) {
                    f = ["<tr>", '<td class="pull-left">' + c.newLabel + "</td>", '<td class="pull-right"><button class="editHostLabelButton btn btn-icon-only" title="Edit Host Label"><i class="icon-pencil"></i></button><button class="deleteHostLabelButton btn btn-icon-only" title="Delete Host Label"><i class="icon-trash"></i></button></td></tr>'].join("");
                    $("#currentHostLabels tbody").append(f);
                    b += 1;
                    a();
                    e = !0;
                    g()
                });
                return !1
            }
        });
        $("#hostLabelsDialog").on("click", ".deleteHostLabelButton", function (c) {
            c.preventDefault();
            var f = $(this).closest("tr");
            c = f.find("td:first").text();
            $.getJSON("/host/deleteLabel/" + MMS.Globals.GROUP_ID + "?val=" + encodeURIComponent(c), function (c) {
                f.remove();
                b -= 1;
                a();
                e = !0
            })
        });
        $("#hostLabelsDialog").on("click", ".editHostLabelButton", function (a) {
            a.preventDefault();
            a = $(this);
            var b = a.closest("tr").find("td:first"),
                c = b.text(),
                c = ['<input type="text" class="editLabel" data-original="' +
                    c + '" value="' + c + '"/>', '<button class="btn changeHostLabelBtn">Change</button>'].join("");
            b.html(c);
            a.attr("disabled", "disabled")
        });
        $("#hostLabelsDialog").on("click", ".changeHostLabelBtn", function (a) {
            a.preventDefault();
            var b = $(this).closest("tr"),
                c = b.find("td:first");
            a = c.find(".editLabel");
            var h = a.data("original"),
                l = a.val();
            $.getJSON("/host/updateLabel/" + MMS.Globals.GROUP_ID + "?old=" + encodeURIComponent(h) + "&new=" + encodeURIComponent(l), function (a) {
                c.text(l);
                b.find(".editHostLabelButton").removeAttr("disabled");
                e = !0
            })
        })
    }
})();
(function () {
    MMS.bindHostsEvents = function () {
        $(".hostsTableContainer").on("click", ".deleteHostButton", function () {
            $(".formError").hide();
            var a = $(this).attr("data-value");
            $("#deleteHostId").val(a);
            $("#deleteHostContainer").modal({
                show: !0
            });
            $("#deleteHostContainer div.alert").hide()
        })
    }
})();
(function () {
    function a(a) {
        -1 != a.indexOf("href") && (a = a.replace(/.*?<a href=.*?>/gi, ""), a = a.replace(/.*?<span.*?>/gi, ""), a = a.replace(/<\/span>/gi, ""), a = a.replace(/<\/a>/gi, ""));
        a = a.replace(" ", "");
        if ("" === a) return -1;
        var b = a.split("/");
        a = b[0].replace(" ", "");
        var e = b[1].replace(" ", ""),
            g = b[2].split("-"),
            b = g[0].replace(" ", ""),
            h = g[1].split(":"),
            g = h[0].replace(" ", ""),
            h = h[1].replace(" ", "");
        return 1 * (b + a + e + g + h)
    }

    function b(a) {
        -1 != a.indexOf("href") && (a = a.replace(/.*?<a href=.*?>/gi, ""), a = a.replace(/.*?<span.*?>/gi,
            ""), a = a.replace(/<\/span>/gi, ""), a = a.replace(/<\/a>/gi, ""));
        a = a.replace(" ", "");
        if ("" === a) return -1;
        var b = a.split("-");
        a = b[1].replace(" ", "");
        var e = b[0].replace(" ", ""),
            g = b[2].replace(" ", ""),
            h = b[3].split(":"),
            b = h[0].replace(" ", ""),
            h = h[1].replace(" ", "");
        return 1 * (g + a + e + b + h)
    }

    function e(a) {
        -1 != a.indexOf("href") && (a = a.replace(/.*?<a href=.*?>/gi, ""), a = a.replace(/.*?<span.*?>/gi, ""), a = a.replace(/<\/span>/gi, ""), a = a.replace(/<\/a>/gi, ""));
        a = a.replace(" ", "");
        if ("" === a) return -1;
        var b = a.split("-");
        a = b[1].replace(" ",
            "");
        var e = b[2].replace(" ", ""),
            g = b[0].replace(" ", ""),
            h = b[3].split(":"),
            b = h[0].replace(" ", ""),
            h = h[1].replace(" ", "");
        return 1 * (g + a + e + b + h)
    }
    MMS.Globals.DATA_TABLE_DEFAULTS = {
        sDom: "<'row table-top'<'col-md-12'f>r>t<'row'<'col-md-12'p i>>",
        oLanguage: {
            sSearch: '<i class="icon-search"></i>',
            sInfo: "<strong>_START_</strong>&ndash;<strong>_END_</strong> of <strong>_TOTAL_</strong>",
            sInfoEmpty: "<strong>0</strong>&ndash;<strong>0</strong> of <strong>0</strong>",
            oPaginate: {
                sNext: '<i class="icon-chevron-right"></i>',
                sPrevious: '<i class="icon-chevron-left"></i>'
            }
        },
        bDestroy: !1,
        iDisplayLength: 100,
        sPaginationType: "two_button",
        bProcessing: !1,
        bStateSave: !1,
        bLengthChange: !1,
        bSortClasses: !1,
        bAutoWidth: !1
    };
    $.fn.dataTableExt.oStdClasses.sPaging = "btn-group dataTables_paginate paging_";
    $.fn.dataTableExt.oStdClasses.sPagePrevEnabled = "btn btn-icon-only";
    $.fn.dataTableExt.oStdClasses.sPagePrevDisabled = "btn btn-icon-only disabled";
    $.fn.dataTableExt.oStdClasses.sPageNextEnabled = "btn btn-icon-only";
    $.fn.dataTableExt.oStdClasses.sPageNextDisabled =
        "btn btn-icon-only disabled";
    $.extend($.fn.dataTableExt.oStdClasses, {
        sWrapper: "dataTables_wrapper form-inline"
    });
    jQuery.fn.dataTableExt.oSort["mms-date-asc"] = function (b, d) {
        var e = a(b),
            g = a(d);
        return e < g ? -1 : e > g ? 1 : 0
    };
    jQuery.fn.dataTableExt.oSort["mms-date-desc"] = function (b, d) {
        var e = a(b),
            g = a(d);
        return e < g ? 1 : e > g ? -1 : 0
    };
    jQuery.fn.dataTableExt.oSort["mms-date-aussie-asc"] = function (a, d) {
        var e = b(a),
            g = b(d);
        return e < g ? -1 : e > g ? 1 : 0
    };
    jQuery.fn.dataTableExt.oSort["mms-date-aussie-desc"] = function (a, d) {
        var e = b(a),
            g =
                b(d);
        return e < g ? 1 : e > g ? -1 : 0
    };
    jQuery.fn.dataTableExt.oSort["mms-date-iso-asc"] = function (a, b) {
        var f = e(a),
            g = e(b);
        return f < g ? -1 : f > g ? 1 : 0
    };
    jQuery.fn.dataTableExt.oSort["mms-date-iso-desc"] = function (a, b) {
        var f = e(a),
            g = e(b);
        return f < g ? 1 : f > g ? -1 : 0
    };
    jQuery.fn.dataTableExt.oSort["data-sort-asc"] = function (a, b) {
        var e = $(a).data("sortvalue"),
            g = $(b).data("sortvalue");
        return e < g ? -1 : e > g ? 1 : 0
    };
    jQuery.fn.dataTableExt.oSort["data-sort-desc"] = function (a, b) {
        var e = $(a).data("sortvalue"),
            g = $(b).data("sortvalue");
        return e < g ? 1 :
            e > g ? -1 : 0
    };
    jQuery.fn.dataTableExt.oSort["host-type-asc"] = function (a, b) {
        var e = $.trim($(a).text()),
            g = $.trim($(b).text());
        return "arbiter" === e && ("primary" === g || "secondary" === g) ? 1 : ("primary" === e || "secondary" === e) && "arbiter" === g ? -1 : e < g ? -1 : e > g ? 1 : 0
    };
    jQuery.fn.dataTableExt.oSort["host-type-desc"] = function (a, b) {
        var e = $.trim($(a).text()),
            g = $.trim($(b).text());
        return "arbiter" === e && ("primary" === g || "secondary" === g) ? -1 : ("primary" === e || "secondary" === e) && "arbiter" === g ? 1 : e < g ? 1 : e > g ? -1 : 0
    };
    jQuery.fn.dataTableExt.oApi.fnGetColumnData = function (a, b, e, g, h) {
        if ("undefined" == typeof b) return [];
        "undefined" == typeof e && (e = !0);
        "undefined" == typeof g && (g = !0);
        "undefined" == typeof h && (h = !0);
        a = !0 == g ? a.aiDisplay : a.aiDisplayMaster;
        g = [];
        for (var l = /<(?:.|\n)*?>/gm, k = 0, p = a.length; k < p; k++) {
            iRow = a[k];
            var n = this.fnGetData(iRow)[b].replace(l, "");
            !0 == h && 0 == n.length || !0 == e && -1 < jQuery.inArray(n, g) || g.push(n)
        }
        return g.sort()
    }
})();
(function (a) {
    var b = function (b, d) {
        this.element = b;
        this.options = a.extend({}, e, d);
        this.isBellVisible = !1;
        this.checkForOpenAlerts(!0)
    };
    b.prototype.refresh = function () {
        this.checkForOpenAlerts(!1)
    };
    b.prototype.updateBell = function (a, b) {
        a.text(b);
        0 < b ? this.isBellVisible || (a.show(), this.isBellVisible = !0) : this.isBellVisible && (a.hide(), this.isBellVisible = !1)
    };
    b.prototype.checkForOpenAlerts = function (b) {
        var d = this,
            e = function () {
                var g = d.element.find(".new-alert-count");
                a.ajax({
                    url: "/activity/openAlertCount/" + MMS.Globals.GROUP_ID,
                    dataType: "json",
                    ifModified: !0,
                    cache: !0
                }).done(function (a, b, c) {
                    304 !== c.status && d.updateBell(g, a.count)
                }).always(function () {
                    b && d.options.checkInterval && setTimeout(e, d.options.checkInterval)
                })
            };
        e()
    };
    a.fn.open_alerts_widget = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("open_alerts");
            e || d.data("open_alerts", e = new b(d, c));
            "string" == typeof c && e[c].call(e)
        })
    };
    var e = {
        checkInterval: 12E4
    }
})(jQuery);
(function () {
    function a(a, b, e, l) {
        a = $(a);
        if (0 < a.length) {
            var k = a.parent().find(".settings-indicator");
            a.change(function (a) {
                k.html("&nbsp;");
                var f = $.ajax({
                    url: b + encodeURIComponent(a.target.value),
                    data: l && l(a) || {}
                });
                f.done(function () {
                    void 0 !== e && e(a);
                    c(k)
                });
                f.fail(function () {
                    d(k)
                })
            })
        }
    }

    function b(a, b) {
        if (0 < a.length) {
            var e = a.parent().find(".settings-indicator");
            $.ajax({
                url: b
            }).done(function () {
                c(e)
            }).fail(function () {
                d(e)
            })
        }
    }

    function e() {
        function a(b) {
            $(".flushGroupId").text(MMS.Globals.GROUP_ID);
            $(".flushGroupName").text(c);
            0 === b ? ($("#confirmFlushGroupText").show(), $("#confirmFlushGroupText2").hide(), $("#confirmFlushGroupText3").hide(), $("#confirmFlushGroupGroupBtn").show(), $("#confirmFlushGroupGroupBtn2").hide()) : 1 === b ? ($("#confirmFlushGroupText").hide(), $("#confirmFlushGroupText2").show(), $("#confirmFlushGroupText3").hide(), $("#confirmFlushGroupGroupBtn").hide(), $("#confirmFlushGroupGroupBtn2").show()) : 2 === b && ($("#confirmFlushGroupText").hide(), $("#confirmFlushGroupText2").hide(), $("#confirmFlushGroupText3").show(),
                $("#confirmFlushGroupGroupBtn").hide(), $("#confirmFlushGroupGroupBtn2").show())
        }
        var b = $("#confirmFlushGroupModal"),
            c;
        $("#flushGroupBtn").click(function (d) {
            c = $(this).data("groupname");
            a(0);
            b.modal({
                show: !0
            })
        });
        b.on("click", "#confirmFlushGroupGroupBtn", function (b) {
            a(1)
        });
        b.on("click", "#confirmFlushGroupGroupBtn2", function (c) {
            $(this);
            a(2);
            b.find(".btn").attr("disabled", !0);
            $.ajax({
                url: "/settings/flushGroup/" + MMS.Globals.GROUP_ID
            }).done(function () {
                b.find(".btn").removeAttr("disabled");
                b.modal("hide")
            })
        })
    }

    function c(a) {
        a.css("color", "green").html('<i class="icon-ok"></i>')
    }

    function d(a) {
        a.css("color", "red").html('<i class="icon-remove"></i>')
    }
    MMS.bindSettingsEvents = function () {
        a("#dashboardSelect", "/settings/updateDefaultDashboard/");
        a("#homepageIdSelect", "/settings/updateHomepageId/");
        a("#groupChangeIdSelect", "/settings/updateGroupChangeId/");
        a("#timeZoneIdSelect", "/settings/updateTimeZoneId/", function (a) {
            $("#currentTimeZone").trigger("timeZoneChanged", {
                timeZoneId: a.target.value,
                timeZoneDisp: $(a.target).find("option:selected").data("display")
            })
        }, function (a) {
            return {
                disp: $(a.target).find("option:selected").data("display")
            }
        });
        a("#dateFormatSelect", "/settings/updateDateFormat/");
        a("#customerTimeZoneIdSelect", "/settings/updateGroupTimeZoneId/" + MMS.Globals.GROUP_ID + "/", void 0, function (a) {
            return {
                disp: $(a.target).find("option:selected").data("display")
            }
        });
        $("#separateOpcounterChartsBtn").on("switch-change", function (a, c) {
            b($(this), "/settings/updateSeparateOpcounterCharts/" + c.value)
        });
        $("#displayChartAnnotationsBtn").on("switch-change", function (a,
            c) {
            b($(this), "/settings/changeDisplayChartAnnotations/" + c.value)
        });
        $("#logDataCollectionAllHostsBtn").on("switch-change", function (a, c) {
            b($(this), "/settings/updateLogDataCollectionAllHosts/" + MMS.Globals.GROUP_ID + "/" + c.value)
        });
        $("#enableAllHostProfilersBtn").on("switch-change", function (a, c) {
            b($(this), "/settings/updateEnableAllHostProfilers/" + MMS.Globals.GROUP_ID + "/" + c.value)
        });
        $("#exposedDbSettingBtn").on("switch-change", function (a, c) {
            b($(this), (!c.value ? "/user/exposedDbDisable/" : "/user/exposedDbEnable/") +
                MMS.Globals.GROUP_ID)
        });
        $("#disableDbstatsSettingBtn").on("switch-change", function (a, c) {
            b($(this), "/settings/changeDisableDbstats/" + MMS.Globals.GROUP_ID)
        });
        $("#emailOptSettingBtn").on("switch-change", function (a, c) {
            b($(this), c.value ? "/user/emailOptIn" : "/user/emailOptOut")
        });
        $(".show-key").click(function () {
            $(this).next().show();
            $(this).hide()
        });
        $(".featureFlagToggle").on("click", function (a) {
            var b = $(a.currentTarget),
                c = b.data("ff"),
                d = b.is(":checked");
            a = $.post("/settings/featureFlag/" + MMS.Globals.GROUP_ID +
                "/" + c + "/" + d);
            a.done(function (a) {
                a && b.next("span").text(!0 === d ? "Enabled" : "Disabled")
            });
            a.fail(function () {
                alert("Error setting feature flag: " + c);
                b.attr("checked", !d)
            })
        });
        e()
    }
})();
$(function () {
    function a(a) {
        $("#twoFactorAuthSuccess").hide();
        $("#twoFactorAuthError").empty().append($("<strong>" + a.message + "</strong>")).append("<br>").append(a.detail).show()
    }

    function b(a) {
        a = a.toLowerCase();
        return a.substring(0, 4) + " " + a.substring(4, 8) + " " + a.substring(8, 12) + " " + a.substring(12, 16)
    }

    function e(a) {
        $("#changePasswordError").hide();
        $("#changePasswordSuccess").empty().append($("<strong>" + a + "</strong>")).show();
        $("div.change", p).hide()
    }
    $("#twoFactorSettings");
    var c = $("#phoneNumberSettings"),
        d = $(".phoneNumberForm"),
        f = $("#twoFactorAuthForm"),
        g = $("#googleAuthenticatorSettings"),
        h = $("#phoneNumberGoogleAuthForm"),
        l = $("#googleAuthenticatorForm"),
        k = $("#googleAuthenticatorAuthForm");
    d.submit(function () {
        return !1
    });
    l.submit(function () {
        return !1
    });
    f.submit(function () {
        return !1
    });
    h.submit(function () {
        return !1
    });
    k.submit(function () {
        return !1
    });
    $("#showForm", c).on("click", function () {
        $("div.current", c).fadeOut(300, function () {
            $("div.change", c).fadeIn(300);
            $("div.instructions", c).fadeIn(300)
        })
    });
    $("#showForm",
        g).on("click", function () {
        $("div.current", g).fadeOut(300, function () {
            $("div.authCode", g).fadeIn(300);
            $("div.instructions", g).fadeIn(300)
        });
        showLoading();
        var a = "";
        $.ajax({
            async: !1,
            url: "/user/twoFactorAuthenticatorManual/" + MMS.Globals.GROUP_ID,
            type: "GET",
            dataType: "json",
            success: function (c) {
                $("div.authCode", g).fadeIn(300);
                $("div.googleAuthenticatorAccount").text("Account: " + c.username);
                $("div.googleAuthenticatorSecret").text("Key: " + b(c.secret));
                a = c.secret;
                hideLoading()
            }
        });
        showLoading();
        $("div.instructions",
            g).fadeOut(300, function () {
            $("div.authCode", g).fadeIn(300)
        });
        $("div.googleAuthenticatorQRCode").html('<img src="/user/twoFactorAuthenticatorBarcode/' + MMS.Globals.GROUP_ID + "/" + a + '" />');
        hideLoading()
    });
    $(".sendCode", d).click(function () {
        var b = d[0];
        showLoading();
        $.ajax({
            url: "/user/twoFactorRequestCode",
            type: "POST",
            dataType: "json",
            data: {
                authPhone: b.authPhone.value
            },
            success: function (b) {
                hideLoading();
                b.error ? a(b) : b.ok && $("div.authCode", c).fadeIn(300)
            }
        })
    });
    $(".sendCode", h).click(function () {
        showLoading();
        $.ajax({
            url: "/multifactorauth/sendtoken/" + MMS.Globals.GROUP_ID,
            type: "POST",
            dataType: "json",
            success: function (b) {
                hideLoading();
                b.error && a(b)
            }
        })
    });
    $("button.authenticate", f).click(function () {
        showLoading();
        var b = {
            authPhone: d[0].authPhone.value,
            authCode: f[0].authCode.value
        };
        f[0].existingCode && (b.existingCode = f[0].existingCode.value);
        $.ajax({
            url: "/user/twoFactorAuth/" + MMS.Globals.GROUP_ID,
            type: "POST",
            dataType: "json",
            data: b,
            success: function (b) {
                hideLoading();
                b.error ? a(b) : b.ok && window.location.reload()
            }
        })
    });
    $("button.authenticate", k).click(function () {
        showLoading();
        var b = {
            authCode: k[0].authCode.value
        };
        k[0].existingCode && (b.existingCode = k[0].existingCode.value);
        $.ajax({
            url: "/user/googleAuthenticatorAuth/" + MMS.Globals.GROUP_ID,
            type: "POST",
            dataType: "json",
            data: b,
            success: function (b) {
                hideLoading();
                b.error ? a(b) : b.ok && window.location.reload()
            }
        })
    });
    $("#changeEmailAddress").on("click", function (a) {
        $("#emailAddress").fadeOut(300, function () {
            $("#changeEmailForm").fadeIn(300)
        })
    });
    $("#changeEmailSubmit").on("click", function (a) {
        a.preventDefault();
        a = $("#changeEmailForm form");
        $("input.emailAddress", a).val();
        $.ajax({
            url: "/user/profile/updateEmail",
            type: "POST",
            dataType: "json",
            data: a.serialize(),
            success: function (a) {
                var b = a.showCrowdLoginNotice ? "Email address updated. <strong>Please note that only your email address has been updated.</strong> You must continue to use your old user name (<strong>" + a.originalEmail + "</strong>) to log in; this is a system limitation that cannot be worked around at this time." : "Email address updated.";
                1 == a.ok ? ($("#changeEmailResult").html(b).show(), $("#currentEmailAddress").text(a.emailAddress), $("#changeEmailForm").fadeOut(300, function () {
                    $("#emailAddress").fadeIn(300)
                })) : $("#changeEmailResult").text("Email address could not be updated.").show()
            }
        })
    });
    $("#changeBillingEmailAddress").on("click", function (a) {
        $("#billingEmailAddress").fadeOut(300, function () {
            var a = $.trim($("#currentBillingEmailAddress").text());
            "Not set" !== a && $("#changeBillingEmailForm").find("input.billingEmailAddress").val(a);
            $("#changeBillingEmailForm").fadeIn(300)
        })
    });
    $("#changeBillingEmailSubmit").on("click", function (a) {
        a.preventDefault();
        a = $("#changeBillingEmailForm form");
        a = $("input.billingEmailAddress", a).val();
        $.ajax({
            url: "/settings/updateBillingEmail",
            type: "POST",
            dataType: "json",
            data: {
                emailAddress: a
            },
            success: function (a) {
                1 == a.ok ? ($("#changeBillingEmailResult").html("Billing email address updated.").show(), $("#currentBillingEmailAddress").text(a.emailAddress), $("#changeBillingEmailForm").fadeOut(300, function () {
                    $("#billingEmailAddress").fadeIn(300)
                })) : $("#changeBillingEmailResult").text(a.resource).show()
            }
        })
    });
    var p = $("#passwordSettings"),
        n = $("#changePasswordForm");
    $("a.showForm", p).on("click", function () {
        $("input.current, input.new, input.confirm", p).val("");
        $("div.change", p).fadeIn(300)
    });
    n.submit(function () {
        return !1
    });
    $("button.changePassword", p).on("click", function () {
        $("input.current", n).val();
        $("input.new", n).val();
        $("input.confirm", n).val();
        $.ajax({
            url: "/user/updatePassword",
            type: "POST",
            data: n.serialize(),
            dataType: "json",
            success: function (a) {
                if (a.resource) {
                    switch (a.errorCode) {
                    case "NONE":
                        e("Your password has been updated.");
                        return;
                    case "INVALID_USER_AUTH":
                        a = "Please provide your correct current password.";
                        break;
                    case "INVALID_USERNAME":
                        a = "Please enter your username.";
                        break;
                    case "INVALID_PASSWORD":
                        a = "Please enter a new password.";
                        break;
                    case "PASSWORDS_DO_NOT_MATCH":
                        a = "New password does not match confirmation.";
                        break;
                    case "INVALID_PASSWORD_TOO_SHORT":
                        a = MMS.i18n.registerPasswordRequirementErrorMsg;
                        break;
                    case "SERVER_ERROR":
                        a = MMS.i18n.templateServerErrorMsg;
                        break;
                    case "REPEATED_PASSWORD":
                        a = "This password was used recently, please choose a different password.";
                        break;
                    default:
                        a = "Unknown error (" + a.errorCode + ")."
                    }
                    a = {
                        message: "Unable to change password.",
                        detail: a
                    };
                    $("#changePasswordSuccess").hide();
                    $("#changePasswordError").empty().append($("<strong>" + a.message + "</strong>")).append("<br>").append(a.detail).show()
                } else e("Your password has been updated.")
            }
        })
    });
    h = _.sortBy(MMS.Globals.TZ, function (a) {
        return a.off
    });
    _.each(h, function (a) {
        var b = 0 < a.off ? "+" : "-",
            c = Math.abs(a.off),
            d = Math.floor(c),
            c = 60 * (c - Math.floor(c));
        10 > d && (d = "0" + d);
        10 > c && (c = "0" + c);
        b = "(" + b + d + ":" + c +
            ")";
        $("<option/>").attr("value", a.can).data("display", a.disp).text(b + " " + a.disp).appendTo($("#timeZoneIdSelect"));
        $("<option/>").attr("value", a.can).data("display", a.disp).text(b + " " + a.disp).appendTo($("#customerTimeZoneIdSelect"))
    });
    null !== MMS.Globals.TIME_ZONE_ID && $("#timeZoneIdSelect option").each(function () {
        $(this).val() === MMS.Globals.TIME_ZONE_ID && $(this).data("display") == MMS.Globals.TIME_ZONE_DISPLAY && $(this).prop("selected", !0)
    });
    null !== MMS.Globals.GROUP_TIME_ZONE_ID && $("#customerTimeZoneIdSelect option").each(function () {
        $(this).val() ===
            MMS.Globals.GROUP_TIME_ZONE_ID && $(this).data("display") === MMS.Globals.GROUP_TIME_ZONE_DISPLAY && $(this).prop("selected", !0)
    })
});
(function () {
    MMS.bindAutomationSSHKeyEvents = function () {
        $("#automationSSHKeysTable").on("click", "button.deactivateMMSAutomationKey", function (a) {
            a.preventDefault();
            a = $(a.currentTarget).val();
            a = new MMS.Views.DeleteMMSAutomationKeyDialog({
                model: {
                    keyName: a
                }
            });
            a.render();
            a.show()
        });
        $("#automationSSHKeysTable").on("click", "button.addMMSAutomationKey", function (a) {
            a.preventDefault();
            $(a.currentTarget);
            a = new MMS.Views.AddMMSAutomationKeyDialog({
                model: {}
            });
            a.render();
            a.show()
        })
    };
    MMS.bindAutomationAPIKeyEvents = function () {
        $("#automationAPIKeysTable").on("click", "button.deactivateAutomationAPIKey", function (a) {
            a.preventDefault();
            a = $(a.currentTarget).val();
            a = new MMS.Views.DeleteMMSAutomationAPIKeyDialog({
                model: {
                    keyType: a
                }
            });
            a.render();
            a.show()
        });
        $("#automationAPIKeysTable").on("click", "button.addAutomationAPIKey", function (a) {
            a.preventDefault();
            $(a.currentTarget);
            a = new MMS.Views.AddMMSAutomationAPIKeyDialog({
                model: {}
            });
            a.render();
            a.show()
        })
    }
})();
MMS.Views.Base = Backbone.View.extend({
    events: {
        "click .apply": "clickApply",
        "click .confirm": "clickConfirm",
        "click .actions .cancel": "clickCancel"
    },
    clickApply: function (a) {
        a.preventDefault();
        !0 === (!_.isFunction(this.validate) || this.validate()) && this.hide()
    },
    clickCancel: function (a) {
        a.preventDefault();
        this.hide()
    },
    clickConfirm: function (a) {
        return this.proceed()
    },
    hide: function () {
        this.$el.modal("hide");
        this.undelegateEvents()
    },
    error: function (a) {
        this.$(".alert-error").show().text(a)
    },
    hideError: function () {
        this.$(".alert-error").hide()
    },
    show: function () {
        var a = this;
        this.$el.modal("show");
        this.$el.on("hidden", function () {
            a.trigger("hidden")
        })
    },
    cancel: function () {
        return this.hide()
    }
});
MMS.Views.DeleteMMSAutomationKeyDialog = MMS.Views.Base.extend({
    el: "#disableMMSAutomationKeyModal",
    initialize: function (a) {
        this.model.keyName = a.model.keyName;
        Backbone.on("confirmDeleteSSHKey:success", this.success, this)
    },
    proceed: function (a) {
        Backbone.trigger("confirmDeleteSSHKey:success");
        return this
    },
    hide: function () {
        this.constructor.__super__.hide.apply(this);
        hideLoading();
        this.enableButtons();
        this.clear();
        this.off()
    },
    clear: function () {
        this.hideError()
    },
    enableButtons: function () {
        this.$el.find("button.confirm").removeAttr("disabled");
        this.$el.find("button.close").removeAttr("disabled");
        this.$el.find("button.cancel").removeAttr("disabled")
    },
    disableButtons: function () {
        this.$el.find("button.confirm").attr("disabled", "disabled");
        this.$el.find("button.close").attr("disabled", "disabled");
        this.$el.find("button.cancel").attr("disabled", "disabled")
    },
    success: function () {
        $dialog = this;
        $dialog.disableButtons();
        $dialog.hideError();
        $.ajax({
            async: !0,
            url: "/automation/machines/disableMMSKey/" + MMS.Globals.GROUP_ID,
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                keyName: this.model.keyName
            }),
            success: function (a) {
                $dialog.enableButtons();
                "OK" == a.status ? ($dialog.hide(), location.reload()) : void 0 !== a.errorCode ? (hideLoading(), $dialog.error(a.resource)) : (hideLoading(), $dialog.error(MMS.i18n.templateServerErrorMsg))
            },
            error: function (a) {
                $dialog.enableButtons();
                hideLoading();
                $dialog.error(MMS.i18n.templateServerErrorMsg)
            }
        })
    }
});
MMS.Views.DeleteMMSAutomationAPIKeyDialog = MMS.Views.Base.extend({
    el: "#disableMMSAutomationAPIKeyModal",
    initialize: function (a) {
        this.model.keyType = a.model.keyType;
        Backbone.on("confirmDeleteAPIKey:success", this.success, this)
    },
    proceed: function (a) {
        Backbone.trigger("confirmDeleteAPIKey:success");
        return this
    },
    hide: function () {
        this.constructor.__super__.hide.apply(this);
        hideLoading();
        this.enableButtons();
        this.clear();
        this.off()
    },
    clear: function () {
        this.hideError()
    },
    enableButtons: function () {
        this.$el.find("button.confirm").removeAttr("disabled");
        this.$el.find("button.close").removeAttr("disabled");
        this.$el.find("button.cancel").removeAttr("disabled")
    },
    disableButtons: function () {
        this.$el.find("button.confirm").attr("disabled", "disabled");
        this.$el.find("button.close").attr("disabled", "disabled");
        this.$el.find("button.cancel").attr("disabled", "disabled")
    },
    success: function () {
        $dialog = this;
        $dialog.disableButtons();
        $dialog.hideError();
        $.ajax({
            async: !0,
            url: "/automation/machines/disableAPIKey/" + MMS.Globals.GROUP_ID,
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                keyType: this.model.keyType
            }),
            success: function (a) {
                $dialog.enableButtons();
                "OK" == a.status ? ($dialog.hide(), location.reload()) : void 0 !== a.errorCode ? (hideLoading(), $dialog.error(a.resource)) : (hideLoading(), $dialog.error(MMS.i18n.templateServerErrorMsg))
            },
            error: function (a) {
                $dialog.enableButtons();
                hideLoading();
                $dialog.error(MMS.i18n.templateServerErrorMsg)
            }
        })
    }
});
MMS.Views.AddMMSAutomationKeyDialog = MMS.Views.Base.extend({
    el: "#addMMSAutomationKeyModal",
    events: function () {
        return _.extend({}, MMS.Views.Base.prototype.events, {
            "change #new_key_name": "keyNameChanged",
            "change #new_key_value": "keyValueChanged"
        })
    },
    initialize: function (a) {
        Backbone.on("confirmAddSSHKey:success", this.success, this)
    },
    keyNameChanged: function (a) {
        this.model.newKeyName = $(a.currentTarget).val()
    },
    keyValueChanged: function (a) {
        this.model.newKeyValue = $(a.currentTarget).val()
    },
    render: function () {
        return this
    },
    proceed: function (a) {
        Backbone.trigger("confirmAddSSHKey:success");
        return this
    },
    hide: function () {
        this.constructor.__super__.hide.apply(this);
        hideLoading();
        this.enableButtons();
        this.clear();
        this.off()
    },
    clear: function () {
        this.hideError();
        this.$el.find("input").val("");
        this.$el.find("textarea").val("")
    },
    enableButtons: function () {
        this.$el.find("button.confirm").removeAttr("disabled");
        this.$el.find("button.close").removeAttr("disabled");
        this.$el.find("button.cancel").removeAttr("disabled")
    },
    disableButtons: function () {
        this.$el.find("button.confirm").attr("disabled",
            "disabled");
        this.$el.find("button.close").attr("disabled", "disabled");
        this.$el.find("button.cancel").attr("disabled", "disabled")
    },
    success: function () {
        $dialog = this;
        $dialog.disableButtons();
        $dialog.hideError();
        showLoading();
        if (void 0 === this.model.newKeyName || void 0 === this.model.newKeyValue) return $dialog.error("Key name and value are required"), $dialog.enableButtons(), hideLoading(), !1;
        $.ajax({
            async: !0,
            url: "/automation/machines/addMMSKey/" + MMS.Globals.GROUP_ID,
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                keyName: this.model.newKeyName,
                keyValue: this.model.newKeyValue
            }),
            success: function (a) {
                $dialog.enableButtons();
                "OK" == a.status ? ($dialog.hide(), location.reload()) : void 0 !== a.errorCode ? (hideLoading(), $dialog.error(a.resource)) : (hideLoading(), $dialog.error(MMS.i18n.templateServerErrorMsg))
            },
            error: function (a) {
                $dialog.enableButtons();
                hideLoading();
                $dialog.error(MMS.i18n.templateServerErrorMsg)
            }
        })
    }
});
MMS.Views.AddMMSAutomationAPIKeyDialog = MMS.Views.Base.extend({
    el: "#addMMSAutomationAPIKeyModal",
    events: function () {
        return _.extend({}, MMS.Views.Base.prototype.events, {
            "change #new_key_name": "keyNameChanged",
            "change #new_key_value": "keyValueChanged",
            "change #new_key_type": "keyTypeChanged"
        })
    },
    initialize: function (a) {
        Backbone.on("confirmAddAPIKey:success", this.success, this)
    },
    keyNameChanged: function (a) {
        this.model.newKeyName = $(a.currentTarget).val()
    },
    keyValueChanged: function (a) {
        this.model.newKeyValue = $(a.currentTarget).val()
    },
    keyTypeChanged: function (a) {
        this.model.newKeyType = $(a.currentTarget).val()
    },
    render: function () {
        return this
    },
    proceed: function (a) {
        Backbone.trigger("confirmAddAPIKey:success");
        return this
    },
    hide: function () {
        this.constructor.__super__.hide.apply(this);
        hideLoading();
        this.enableButtons();
        this.clear();
        this.off()
    },
    clear: function () {
        this.hideError();
        this.$el.find("input").val("");
        this.$el.find("textarea").val("")
    },
    enableButtons: function () {
        this.$el.find("button.confirm").removeAttr("disabled");
        this.$el.find("button.close").removeAttr("disabled");
        this.$el.find("button.cancel").removeAttr("disabled")
    },
    disableButtons: function () {
        this.$el.find("button.confirm").attr("disabled", "disabled");
        this.$el.find("button.close").attr("disabled", "disabled");
        this.$el.find("button.cancel").attr("disabled", "disabled")
    },
    success: function () {
        $dialog = this;
        $dialog.disableButtons();
        $dialog.hideError();
        showLoading();
        void 0 === this.model.newKeyType && (this.model.newKeyType = $("select#new_key_type").val());
        if (void 0 === this.model.newKeyName || void 0 === this.model.newKeyValue ||
            void 0 === this.model.newKeyType) return $dialog.error("Type, access key id and secret are required"), $dialog.enableButtons(), hideLoading(), !1;
        $.ajax({
            async: !0,
            url: "/automation/machines/addAPIKey/" + MMS.Globals.GROUP_ID,
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                keyName: this.model.newKeyName,
                keyValue: this.model.newKeyValue,
                keyType: this.model.newKeyType
            }),
            success: function (a) {
                $dialog.enableButtons();
                "OK" == a.status ? ($dialog.hide(), location.reload()) : void 0 !== a.errorCode ?
                    (hideLoading(), $dialog.error(a.resource)) : (hideLoading(), $dialog.error(MMS.i18n.templateServerErrorMsg))
            },
            error: function (a) {
                $dialog.enableButtons();
                hideLoading();
                $dialog.error(MMS.i18n.templateServerErrorMsg)
            }
        })
    }
});
(function (a) {
    var b = function (b, f) {
        this.element = b;
        this.options = a.extend({}, c, f);
        !0 === this.options.autoBrowserCheck && this.browserCheck();
        e(this.element)
    }, e = function (a) {
            0 < a.children().length ? a.show() : a.hide()
        };
    b.prototype.post = function (b, c, g) {
        var h = this.element;
        b = a('<div class="' + b + '">');
        g && b.append(a('<i class="icon-' + g + '">&nbsp; '));
        b.append(a('<span class="content">' + c + "</span>"));
        b.appendTo(h);
        e(h)
    };
    b.prototype.remove = function (a) {
        this.element.find("div." + a).remove();
        e(this.element)
    };
    b.prototype.browserCheck = function () {
        Modernizr.canvas || this.post("browser-warning", "This browser version is not supported. Please use an HTML5 compliant browser.", "warning-sign")
    };
    b.prototype.backupAgentCheck = function () {
        var b = this;
        a.getJSON("/backup/status/" + MMS.Globals.GROUP_ID, function (a) {
            a.agentIsLatest || b.post("backup-agent-warning", ["Your Backup Agent is out of date. Please ", '<strong><a href="/settings/backup-agent/' + MMS.Globals.GROUP_ID + '">update</a></strong>', " your Backup Agent."].join(""), "warning-sign")
        })
    };
    a.fn.ui_msgs_widget = function (c) {
        var e = arguments;
        return this.each(function () {
            var g = a(this),
                h = g.data("ui_msgs");
            h || g.data("ui_msgs", h = new b(g, c));
            "string" == typeof c && "function" == typeof h[c] && h[c].apply(h, Array.prototype.slice.call(e, 1))
        })
    };
    var c = {
        autoBrowserCheck: !0
    }
})(jQuery);
MMS.AxisLabelFormatters = function () {
    function a(a) {
        return 1024 <= a ? [a / 1024, "GB"] : [a, "MB"]
    }

    function b(a) {
        return 1073741824 <= a ? [a / 1073741824, "GB"] : 1048576 <= a ? [a / 1048576, "MB"] : 1024 <= a ? [a / 1024, "KB"] : [a, ""]
    }

    function e(a) {
        return 125E6 <= a ? [a / 125E6, " Gbits"] : 125E3 <= a ? [a / 125E3, " Mbits"] : [a / 125, " Kbits"]
    }

    function c(a) {
        return 3600 <= a ? [a / 3600, "h"] : [a, "s"]
    }

    function d(a) {
        return 1E3 <= a ? [a / 1E3, "s"] : [a, "ms"]
    }

    function f(a) {
        return 1E9 <= a ? [a / 1E9, "B"] : 1E6 <= a ? [a / 1E6, "M"] : 1E3 <= a ? [a / 1E3, "K"] : [a, ""]
    }

    function g(a) {
        var b = a[0];
        a = a[1];
        return 0 === b ? "0" : 1E-5 >= b ? b.toExponential(2) + a : 1E-4 >= b ? b.toFixed(5) + a : 0.001 >= b ? b.toFixed(4) + a : 0.01 >= b ? b.toFixed(3) + a : parseFloat(b.toFixed(2)).toLocaleString() + a
    }
    return {
        getForChart: function (h) {
            h = "fixed-computed-mem-chart" === h || "fixed-mem-chart" === h || "fixed-dur-mb-chart" === h ? _.compose(g, a) : "db-storage-total" == h || strStartsWith(h, "dynamic-xgendbVals") && strEndsWith(h, "-storageSize-count-chart") || strStartsWith(h, "dynamic-xgendbVals") && strEndsWith(h, "-avgObjSize-count-chart") || strStartsWith(h, "dynamic-xgendbVals") &&
                strEndsWith(h, "-avgObjSize-count-chart") || strStartsWith(h, "dynamic-xgendbVals") && strEndsWith(h, "-dataSize-count-chart") || strStartsWith(h, "dynamic-xgendbVals") && strEndsWith(h, "-indexSize-count-chart") || strStartsWith(h, "dynamic-xgendbVals") && strEndsWith(h, "-fileSize-count-chart") ? _.compose(g, b) : "fixed-network-chart" == h ? _.compose(g, e) : "fixed-background-flush-avg-chart" == h ? _.compose(g, d) : "oplog-secondary-lag-master-time-chart" == h || "oplog-master-time-chart" == h ? _.compose(g, c) : _.compose(g, f);
            return {
                y: {
                    valueFormatter: h,
                    axisLabelFormatter: h
                }
            }
        }
    }
}();
MMS.Decorators.Chart = function (a) {
    this.model = a;
    this.decorate = function () {
        return {
            divId: this.model.getId()
        }
    }
};
MMS.Decorators.ChartWithHeader = function (a) {
    this.model = a;
    this.withStatusDbSelect = function () {
        var a = this.model.get("dataSource").get("chartId");
        return 0 < MMS.Globals.HOST_DBS.length && "dbstats" !== MMS.Globals.CURRENT_CHART_TYPE && "dblocks-.-lockPercent-count-chart" === a
    };
    this.withRecordStatsDbSelect = function () {
        var a = this.model.get("dataSource").get("chartId");
        return 0 < MMS.Globals.HOST_DBS.length && "dbstats" !== MMS.Globals.CURRENT_CHART_TYPE && "recordstats-" === a.substring(0, 12)
    };
    this.withSelect = function () {
        return this.withStatusDbSelect() ||
            this.withRecordStatsDbSelect()
    };
    this.getHostDbs = function () {
        return MMS.Globals.HOST_DBS
    };
    this.getHostType = function () {
        switch (this.model.get("hostType")) {
        case "1":
            return "Standalone";
        case "7":
            return "Primary";
        case "8":
            return "Secondary";
        case "9":
            return "Arbiter";
        case "2":
            return "MongoS";
        case "3":
            return "Config";
        case "13":
            return "Standalone";
        case "14":
            return "Primary";
        case "15":
            return "Secondary";
        default:
            return ""
        }
    };
    this.isDashboard = function () {
        return "dashboard" === MMS.Globals.CURRENT_CHART_TYPE
    };
    this.shouldShowChartFooter = function () {
        return "status" !== MMS.Globals.CURRENT_CHART_TYPE && "dbstats" !== MMS.Globals.CURRENT_CHART_TYPE && "hardware" !== MMS.Globals.CURRENT_CHART_TYPE
    };
    this.decorate = function () {
        return {
            hostId: this.model.get("dataSource").get("hostId"),
            withStatusDbSelect: this.withStatusDbSelect(),
            withRecordStatsDbSelect: this.withRecordStatsDbSelect(),
            withSelect: this.withSelect(),
            hostDbs: this.getHostDbs(),
            hostType: this.getHostType(),
            isDashboard: this.isDashboard(),
            shouldShowChartFooter: this.shouldShowChartFooter()
        }
    }
};
MMS.Decorators.ChartEpochControls = function (a) {
    this.model = a;
    this.isEpochTypeMinute = function () {
        return "minute" === this.model.get("epochType")
    };
    this.isEpochType5Minute = function () {
        return "5minute" === this.model.get("epochType")
    };
    this.isEpochTypeHourly = function () {
        return "hourly" === this.model.get("epochType")
    };
    this.isEpochTypeDaily = function () {
        return "daily" === this.model.get("epochType")
    };
    this.isChartWindowMinute1Hour = function () {
        return "minute-1hour" === this.model.get("chartWindow")
    };
    this.isChartWindowMinute6Hour = function () {
        return "minute-6hour" === this.model.get("chartWindow")
    };
    this.isChartWindowMinute12Hour = function () {
        return "minute-12hour" === this.model.get("chartWindow")
    };
    this.isChartWindowMinute24Hour = function () {
        return "minute-24hour" === this.model.get("chartWindow")
    };
    this.isChartWindow5Minute6Hour = function () {
        return "5minute-6hour" === this.model.get("chartWindow")
    };
    this.isChartWindow5Minute12Hour = function () {
        return "5minute-12hour" === this.model.get("chartWindow")
    };
    this.isChartWindow5Minute24Hour = function () {
        return "5minute-24hour" ===
            this.model.get("chartWindow")
    };
    this.isChartWindow5Minute48Hour = function () {
        return "5minute-48hour" === this.model.get("chartWindow")
    };
    this.isChartWindowHour1Day = function () {
        return "hour-1day" === this.model.get("chartWindow")
    };
    this.isChartWindowHour1Week = function () {
        return "hour-1week" === this.model.get("chartWindow")
    };
    this.isChartWindowHour2Week = function () {
        return "hour-2week" === this.model.get("chartWindow")
    };
    this.isChartWindowHour1Month = function () {
        return "hour-1month" === this.model.get("chartWindow")
    };
    this.isChartWindowHour2Month = function () {
        return "hour-2month" === this.model.get("chartWindow")
    };
    this.isChartWindowDay1Week = function () {
        return "day-week" === this.model.get("chartWindow")
    };
    this.isChartWindowDay2Week = function () {
        return "day-2week" === this.model.get("chartWindow")
    };
    this.isChartWindowDay1Month = function () {
        return "day-month" === this.model.get("chartWindow")
    };
    this.isChartWindowDay6Month = function () {
        return "day-6month" === this.model.get("chartWindow")
    };
    this.isChartWindowDay1Year = function () {
        return "day-year" === this.model.get("chartWindow")
    };
    this.isChartWindowRange = function () {
        return "range" === this.model.get("chartWindow")
    };
    this.isDisplayTypeAverage = function () {
        return "avg" === this.model.get("displayType")
    };
    this.isDisplayTypeTotal = function () {
        return "total" === this.model.get("displayType")
    };
    this.getSelectedTimeZone = function () {
        var a = this.model.get("timeZoneDisplay");
        return a ? a : MMS.Globals.TIME_ZONE_DISPLAY
    };
    this.getTimeZoneValues = function () {
        var a = [];
        MMS.Globals.TIME_ZONE_ID && a.push({
            id: MMS.Globals.TIME_ZONE_ID,
            display: MMS.Globals.TIME_ZONE_DISPLAY
        });
        "Etc/UTC" !== MMS.Globals.TIME_ZONE_ID && a.push({
            id: "Etc/UTC",
            display: "UTC"
        });
        MMS.Globals.GROUP_TIME_ZONE_ID && MMS.Globals.GROUP_TIME_ZONE_ID !== MMS.Globals.TIME_ZONE_ID && a.push({
            id: MMS.Globals.GROUP_TIME_ZONE_ID,
            display: MMS.Globals.GROUP_TIME_ZONE_DISPLAY
        });
        return a
    };
    this.shouldRefresh = function () {
        return this.model.shouldRefresh()
    };
    this.isChartExportSupported = function () {
        return null !== MMS.Globals.CURRENT_HOST_ID
    };
    this.decorate = function () {
        return {
            isEpochTypeMinute: this.isEpochTypeMinute(),
            isEpochType5Minute: this.isEpochType5Minute(),
            isEpochTypeHourly: this.isEpochTypeHourly(),
            isEpochTypeDaily: this.isEpochTypeDaily(),
            isChartWindowMinute1Hour: this.isChartWindowMinute1Hour(),
            isChartWindowMinute6Hour: this.isChartWindowMinute6Hour(),
            isChartWindowMinute12Hour: this.isChartWindowMinute12Hour(),
            isChartWindowMinute24Hour: this.isChartWindowMinute24Hour(),
            isChartWindow5Minute6Hour: this.isChartWindow5Minute6Hour(),
            isChartWindow5Minute12Hour: this.isChartWindow5Minute12Hour(),
            isChartWindow5Minute24Hour: this.isChartWindow5Minute24Hour(),
            isChartWindow5Minute48Hour: this.isChartWindow5Minute48Hour(),
            isChartWindowHour1Day: this.isChartWindowHour1Day(),
            isChartWindowHour1Week: this.isChartWindowHour1Week(),
            isChartWindowHour2Week: this.isChartWindowHour2Week(),
            isChartWindowHour1Month: this.isChartWindowHour1Month(),
            isChartWindowHour2Month: this.isChartWindowHour2Month(),
            isChartWindowDay1Week: this.isChartWindowDay1Week(),
            isChartWindowDay2Week: this.isChartWindowDay2Week(),
            isChartWindowDay1Month: this.isChartWindowDay1Month(),
            isChartWindowDay6Month: this.isChartWindowDay6Month(),
            isChartWindowDay1Year: this.isChartWindowDay1Year(),
            isChartWindowRange: this.isChartWindowRange(),
            isDisplayTypeAverage: this.isDisplayTypeAverage(),
            isDisplayTypeTotal: this.isDisplayTypeTotal(),
            selectedTimeZone: this.getSelectedTimeZone(),
            timeZoneValues: this.getTimeZoneValues(),
            shouldRefresh: this.shouldRefresh(),
            chartExportSupported: this.isChartExportSupported()
        }
    }
};
MMS.Decorators.ClusterChartControls = function (a) {
    this.model = a;
    this.hostTypePrimary = function () {
        return "Primaries" === this.model.get("hostTypes")
    };
    this.hostTypeSecondary = function () {
        return "Secondaries" === this.model.get("hostTypes")
    };
    this.hostTypeAll = function () {
        return "All" === this.model.get("hostTypes")
    };
    this.decorate = function () {
        return {
            groupId: MMS.Globals.GROUP_ID,
            hostTypePrimary: this.hostTypePrimary(),
            hostTypeSecondary: this.hostTypeSecondary(),
            hostTypeAll: this.hostTypeAll()
        }
    }
};
MMS.Models.ChartEpochControls = Backbone.Model.extend({
    defaults: {
        epochType: "hourly",
        chartWindow: "hour-1month",
        displayType: "avg",
        chartRefreshRate: null,
        showAdvancedControls: !1,
        timeZoneId: "Etc/UTC",
        timeZoneDisplay: "UTC",
        endDateRange: null,
        startDateRange: null
    },
    VALID_CHART_WINDOWS: {
        minute: ["minute-1hour", "minute-6hour", "minute-12hour", "minute-24hour"],
        "5minute": ["5minute-6hour", "5minute-12hour", "5minute-24hour", "5minute-48hour"],
        hourly: ["hour-1day", "hour-1week", "hour-2week", "hour-1month", "hour-2month"],
        daily: "day-week day-2week day-month day-6month day-year range".split(" ")
    },
    initialize: function (a, b) {
        this.hasValidEpochType() || this.setDefaultEpochType();
        this.hasValidChartWindow() || this.setDefaultChartWindow();
        this.hasValidDisplayType() || this.setDefaultDisplayType()
    },
    hasValidEpochType: function () {
        var a = this.get("epochType");
        return _.find(_.keys(this.VALID_CHART_WINDOWS), function (b) {
            return b === a
        })
    },
    hasValidChartWindow: function () {
        var a = this.get("chartWindow");
        return _.find(this.VALID_CHART_WINDOWS[this.get("epochType")], function (b) {
            return b === a
        })
    },
    hasValidDisplayType: function () {
        var a =
            this.get("displayType");
        return "avg" === a || "total" === a
    },
    setDefaultEpochType: function () {
        this.set("epochType", _.first(_.keys(this.VALID_CHART_WINDOWS)))
    },
    setDefaultChartWindow: function () {
        this.set("chartWindow", _.first(this.VALID_CHART_WINDOWS[this.get("epochType")]))
    },
    setDefaultDisplayType: function () {
        this.set("displayType", "avg")
    },
    shouldRefresh: function () {
        var a = parseInt(this.get("chartRefreshRate"), 10);
        return !_.isNaN(a) && -1 !== a
    },
    getEpochCount: function (a) {
        return a ? this.getEpochCountForExpanded() : this.getEpochCountForStandard()
    },
    getEpochCountForExpanded: function () {
        var a = this.get("epochType"),
            b = this.get("chartWindow");
        if ("minute" === a) return 2880;
        if ("5minute" == a) return 10080;
        if ("hourly" == a) return 1440;
        if ("daily" == a) {
            if ("day-week" == b) return 7;
            if ("day-2week" == b) return 14;
            if ("day-month" == b) return 31;
            if ("day-6month" == b || "range" == b) return 185;
            if ("day-year" == b) return 365
        }
    },
    getEpochCountForStandard: function () {
        var a = this.get("epochType"),
            b = this.get("chartWindow");
        if ("minute" == a) {
            if ("minute-1hour" == b) return 60;
            if ("minute-6hour" == b) return 360;
            if ("minute-12hour" == b) return 720;
            if ("minute-24hour" == b) return 1440
        } else if ("5minute" == a) {
            if ("5minute-6hour" == b) return 360;
            if ("5minute-12hour" == b) return 720;
            if ("5minute-24hour" == b) return 1440;
            if ("5minute-48hour" == b) return 2880
        } else if ("hourly" == a) {
            if ("hour-1day" == b) return 24;
            if ("hour-1week" == b) return 168;
            if ("hour-2week" == b) return 336;
            if ("hour-1month" == b) return 740;
            if ("hour-2month" == b) return 1480
        } else if ("daily" == a) {
            if ("day-week" == b) return 7;
            if ("day-2week" == b) return 14;
            if ("day-month" == b) return 31;
            if ("day-6month" ==
                b || "range" == b) return 185;
            if ("day-year" == b) return 365
        }
    }
});
MMS.Models.Chart = Backbone.Model.extend({
    defaults: {
        dataSource: null,
        displayName: null,
        dygraphOverrides: {},
        hostType: null,
        hostname: null,
        regexp: null,
        rsId: null,
        dashboardUniqueChartId: null
    },
    getId: function () {
        return this.cid
    }
});
MMS.Collections.Charts = Backbone.Collection.extend({
    model: MMS.Models.Chart
});
MMS.Models.ClusterChartControls = Backbone.Model.extend({
    defaults: {
        hostTypes: "Primaries",
        shards: []
    },
    chartColors: [["#095870", "#1b9ac1", "#b3e2ef"], ["#d2be2a", "#fee73d", "#f2e39b"], ["#be1e2d", "#e56575", "#fbd0d7"], ["#4a2975", "#836aaf", "#d3e8c3"], ["#295e2f", "#70bf56", "#c0de9e"], ["#000000", "#726570", "#c1bfc0"], ["#1d8b86", "#63c4b4", "#b3dfda"], ["#ee7b25", "#edad63", "#efd4b9"]],
    initialize: function (a, b) {
        var e = this,
            c = [],
            d = _.groupBy(b.shardHosts, function (a) {
                return a.shardId
            });
        _.each(b.shardIds, function (a, b) {
            var h =
                d[a];
            _.each(h, function (a, c) {
                a.color = e.chartColors[b % 8][c % 3];
                a.isPrimary = "PRIMARY" === a.replicaStateObj
            });
            c.push({
                id: a,
                color: e.chartColors[b % 8][0],
                checked: !0,
                hosts: h
            })
        });
        this.set("shards", c)
    },
    getExcludedShards: function () {
        var a = this.get("shards");
        return _.filter(a, function (a) {
            return !a.checked
        })
    },
    getHosts: function () {
        var a = [],
            b = this.get("shards");
        _.each(b, function (b) {
            b.checked && (a = a.concat(b.hosts))
        });
        var e = this.get("hostTypes");
        return a = _.filter(a, function (a) {
            if ("All" === e) return !0;
            if ("Primaries" === e) return "PRIMARY" ===
                    a.replicaStateObj;
            if ("Secondaries" === e) return "SECONDARY" === a.replicaStateObj
        })
    },
    getShardColors: function () {
        var a = _.filter(this.get("shards"), function (a) {
            return a.checked
        });
        return _.map(a, function (a) {
            return a.color
        })
    },
    getHostColors: function () {
        return _.map(this.getHosts(), function (a) {
            return a.color
        })
    }
});
MMS.Models.BaseDataSource = Backbone.Model.extend({
    getUrlPrefix: function () {
        if (Modernizr.cors && MMS.Globals.APP_ENV) {
            var a = Math.floor(4 * Math.random());
            if ("prod" === MMS.Globals.APP_ENV) return "https://chart-" + a + "-mms.mongodb.com";
            if ("stage" === MMS.Globals.APP_ENV) return "https://chart-" + a + "-mms-stage.mongodb.com"
        }
        return ""
    },
    fetchData: function () {
        throw new Exception("not implemented");
    }
});
MMS.Models.HostDataSource = MMS.Models.BaseDataSource.extend({
    defaults: {
        hostId: null,
        chartId: null,
        expanded: !1
    },
    getUrl: function (a) {
        a || (a = this.get("hostId"));
        var b = this.getUrlPrefix(),
            e = this.get("chartId"),
            c = MMS.Globals.CHART_EPOCH_CONTROLS,
            d = c.get("timeZoneId"),
            f = c.get("epochType"),
            g = c.getEpochCount(this.get("expanded")),
            h = c.get("displayType"),
            l = c.get("startDateRange"),
            c = c.get("endDateRange"),
            b = b + ("/chart/v1/timeLine/" + MMS.Globals.GROUP_ID + "/" + encodeURIComponent(a) + "/" + e + "/" + encodeURIComponent(d) + "/" +
                f + "/" + g + "/" + h);
        a = -1 == b.indexOf("?") ? "?" : "&";
        l && null !== l && c && null !== c ? b += a + "startTime=" + encodeURIComponent(c) + "&endTime=" + encodeURIComponent(l) : l && null !== l && (b += a + "startTime=" + encodeURIComponent(l));
        b = -1 === b.indexOf("?") ? b + "?json=true" : b + "&json=true"; - 1 === b.indexOf("?") && MMS.Globals.CURRENT_HOST_DB && strStartsWith(e, "dblocks-") ? b += "?hostDbLockName=" + encodeURIComponent(MMS.Globals.CURRENT_HOST_DB) : MMS.Globals.CURRENT_HOST_DB && strStartsWith(e, "dblocks-") && (b += "&hostDbLockName=" + encodeURIComponent(MMS.Globals.CURRENT_HOST_DB)); - 1 === b.indexOf("?") && MMS.Globals.CURRENT_RECORD_STATS_HOST_DB && strStartsWith(e, "recordstats-") ? b += "?hostDbRecordStatsName=" + encodeURIComponent(MMS.Globals.CURRENT_RECORD_STATS_HOST_DB) : MMS.Globals.CURRENT_RECORD_STATS_HOST_DB && strStartsWith(e, "recordstats-") && (b += "&hostDbRecordStatsName=" + encodeURIComponent(MMS.Globals.CURRENT_RECORD_STATS_HOST_DB));
        return b
    },
    fetchData: function () {
        return $.ajax({
            dataType: "json",
            url: this.getUrl(this.get("hostId")),
            xhrFields: {
                withCredentials: !0
            }
        })
    }
});
MMS.Models.ManyHostDataSource = MMS.Models.HostDataSource.extend({
    defaults: {
        chartId: null,
        expanded: !1,
        clusterChartControls: null
    },
    fetchData: function () {
        var a = $.Deferred(),
            b = this,
            e = this.get("clusterChartControls").getHosts(),
            c = _.map(e, function (a) {
                return $.ajax({
                    dataType: "json",
                    url: b.getUrl(a.hostId),
                    xhrFields: {
                        withCredentials: !0
                    }
                })
            });
        $.when.apply($, c).then(function () {
            var d = ["Date"];
            deferredsWithData = [];
            _.each(c, function (a, b) {
                a.responseJSON && (a.responseJSON.data && a.responseJSON.data.length) && (d.push(e[b].hostname),
                    deferredsWithData.push(a))
            });
            0 === deferredsWithData.length ? a.reject(a, "error", MMS.i18n.hostChartNoDataAvailable) : a.resolve({
                columns: d,
                data: b.getZippedData(deferredsWithData)
            })
        });
        return a
    },
    getZippedData: function (a) {
        var b = [];
        _.each(a[0].responseJSON.data, function (e, c) {
            var d = [],
                f = e[0];
            d.push(f);
            _.each(a, function (a) {
                a = a.responseJSON.data[c];
                var b = null,
                    e;
                a ? (e = a[0], e === f ? b = a[1] : console.log("Warning: Cluster Host Data dates do not match. Index: " + c + ", Date: " + e)) : console.log("Warning: Cluster Host Data missing data point. Index: " +
                    c);
                d.push(b)
            });
            b.push(d)
        });
        return b
    }
});
MMS.Models.ShardChunkDataSource = MMS.Models.BaseDataSource.extend({
    defaults: {
        clusterId: null,
        namespace: null,
        expanded: !1,
        clusterChartControls: null
    },
    getUrl: function () {
        var a = this.get("clusterId"),
            b = this.get("namespace"),
            e = MMS.Globals.CHART_EPOCH_CONTROLS;
        e.get("timeZoneId");
        var c = e.get("epochType"),
            d = e.getEpochCount(this.get("expanded")),
            e = e.get("displayType"),
            f = this.get("clusterChartControls").getExcludedShards(),
            g = this.getUrlPrefix(),
            g = g + ("/chart/v1/timeLine/cluster/" + MMS.Globals.GROUP_ID + "/" + encodeURIComponent(a) +
                "/" + encodeURIComponent(b) + "/shardcounts-values-chart/"),
            g = g + (encodeURIComponent(MMS.Globals.TIME_ZONE_ID) + "/" + c + "/" + d + "/" + e + "?json=true");
        _.each(f, function (a) {
            g += "&excludedShardIds=" + encodeURIComponent(a.id)
        });
        return g
    },
    fetchData: function () {
        return $.ajax({
            dataType: "json",
            url: this.getUrl(),
            xhrFields: {
                withCredentials: !0
            }
        })
    }
});
MMS.Models.HostEventDataSourceCache = {};
MMS.vent.on("chart:refreshChart", function () {
    MMS.Models.HostEventDataSourceCache = {}
});
MMS.Models.HostEventDataSource = MMS.Models.BaseDataSource.extend({
    defaults: {
        hostId: null,
        expanded: !1
    },
    getUrl: function (a) {
        a || (a = this.get("hostId"));
        var b = MMS.Globals.CHART_EPOCH_CONTROLS,
            e = b.get("timeZoneId"),
            c = b.get("epochType"),
            d = b.getEpochCount(this.get("expanded")),
            f = b.get("displayType"),
            g = b.get("startDateRange"),
            b = b.get("endDateRange"),
            h = this.getUrlPrefix(),
            h = h + ("/chart/v1/timeLineAnnotations/" + MMS.Globals.GROUP_ID + "/" + encodeURIComponent(a) + "/" + encodeURIComponent(e) + "/" + c + "/" + d + "/" + f);
        g && (null !==
            g && b && null !== b) && (h += "?startTime=" + encodeURIComponent(b) + "&endTime=" + encodeURIComponent(g));
        return h
    },
    fetchData: function () {
        var a = this.get("hostId");
        if (-1 == a.indexOf(",") && -1 == a.indexOf("regexp-") && -1 == a.indexOf("aliasRegexp-") && -1 == a.indexOf("replicaSet-") && -1 == a.indexOf("hostTypes-")) {
            var b = this.getUrl(a);
            if (MMS.Models.HostEventDataSourceCache[b]) return MMS.Models.HostEventDataSourceCache[b];
            a = $.ajax({
                dataType: "json",
                url: this.getUrl(a),
                xhrFields: {
                    withCredentials: !0
                }
            });
            return MMS.Models.HostEventDataSourceCache[b] =
                a
        }
    }
});
MMS.DygraphRenderer = function () {
    return {
        renderChart: function (a, b, e, c, d, f, g, h) {
            function l(b, c, d) {
                a && a.destroy();
                p(d);
                f(null)
            }

            function k(k) {
                a && a.destroy();
                if (!k.data || 0 === k.data.length) p(MMS.i18n.hostChartNoDataAvailable), f(null);
                else {
                    _.each(k.data, function (a) {
                        a[0] = new Date(a[0])
                    });
                    var l = MMS.AxisLabelFormatters.getForChart(e.get("chartId")),
                        r = {
                            labels: k.columns,
                            includeZero: !0,
                            fillGraph: !0,
                            connectSeparatedPoints: !0,
                            padding: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            },
                            rightGap: 18,
                            avoidMinZero: !0,
                            colors: d,
                            labelsDiv: document.getElementById("label-" + b),
                            axisLabelFontSize: 11,
                            axes: {
                                x: {
                                    axisLabelFormatter: Dygraph.dateAxisFormatter
                                },
                                y: l.y
                            },
                            interactionModel: {
                                mousedown: n,
                                mousemove: q,
                                mouseup: m,
                                dblclick: Dygraph.defaultInteractionModel.dblclick
                            },
                            zoomCallback: g,
                            underlayCallback: h
                        };
                    c && (r = _.extend(r, c));
                    _.defer(function () {
                        a = new Dygraph(document.getElementById(b), k.data, r);
                        f(a)
                    })
                }
            }

            function p(a) {
                $("#" + b).html('<br /><br /><br /><div style="text-align:center">' + a + "</div>")
            }

            function n(a, b, c) {
                c.initializeMouseDown(a, b, c);
                Dygraph.startZoom(a, b, c)
            }

            function q(a, b, c) {
                c.isZooming &&
                    Dygraph.moveZoom(a, b, c)
            }

            function m(a, b, c) {
                c.isZooming && Dygraph.endZoom(a, b, c)
            }
            if (Modernizr.canvas) {
                var r = e.fetchData();
                r.done(k);
                r.fail(l)
            }
        }
    }
}();
MMS.Views.ChartEpochControlsView = Backbone.Marionette.ItemView.extend({
    template: Handlebars.templates["charts/chartEpochControls.hbs"],
    templateHelpers: function () {
        return (new MMS.Decorators.ChartEpochControls(this.model)).decorate()
    },
    events: {
        "change #chartEpochButtons": "epochTypeButtonClicked",
        "change #chartWindowButtons": "chartWindowButtonClicked",
        "change #chartDisplayTypeButtons": "displayTypeButtonClicked",
        "change #chartRangeDatepickerEnd": "rangeDateChanged",
        "change #chartRangeDatepickerStart": "rangeDateChanged",
        "click #autoRefreshCheckbox": "autoRefreshClicked",
        "click #showHideAdvancedControls": "showHideAdvancedControls",
        "click .timeZoneSelect": "timeZoneSelected",
        "click .btn-export-host-charts": "exportHostCharts"
    },
    modelEvents: {
        "change:epochType": "epochTypeChanged",
        "change:chartWindow": "renderAndRefreshCharts",
        "change:displayType": "displayTypeChanged",
        "change:showAdvancedControls": "render",
        "change:timeZoneDisplay": "renderAndRefreshCharts"
    },
    refreshTimerId: null,
    refreshIntervalInMs: 6E4,
    initialize: function (a) {
        this.initializeFromUrlHash();
        this.model.shouldRefresh() && (this.refreshTimerId = setTimeout(_.bind(this.autoRefreshCharts, this), this.refreshIntervalInMs))
    },
    initializeFromUrlHash: function () {
        if (window.location.hash) switch (window.location.hash) {
            case "#chartMinute":
                this.model.set("epochType", "minute");
                break;
            case "#chart5Minute":
                this.model.set("epochType", "5minute");
                break;
            case "#chartHour":
                this.model.set("epochType", "hourly");
                break;
            case "#chartDay":
                this.model.set("epochType", "daily");
                break;
            case "#chartLinkMinuteOneHour":
                this.model.set("epochType",
                    "minute");
                this.model.set("chartWindow", "minute-1hour");
                break;
            case "#chartLinkMinuteSixHours":
                this.model.set("epochType", "minute");
                this.model.set("chartWindow", "minute-6hour");
                break;
            case "#chartLinkMinuteTwelveHours":
                this.model.set("epochType", "minute");
                this.model.set("chartWindow", "minute-12hour");
                break;
            case "#chartLinkMinuteOneDay":
                this.model.set("epochType", "minute");
                this.model.set("chartWindow", "minute-24hour");
                break;
            case "#chartLink5MinuteSixHours":
                this.model.set("epochType", "5minute");
                this.model.set("chartWindow",
                    "5minute-6hour");
                break;
            case "#chartLink5MinuteTwelveHours":
                this.model.set("epochType", "5minute");
                this.model.set("chartWindow", "5minute-12hour");
                break;
            case "#chartLink5MinuteTwentyFourHours":
                this.model.set("epochType", "5minute");
                this.model.set("chartWindow", "5minute-24hour");
                break;
            case "#chartLink5MinuteFortyEightHours":
                this.model.set("epochType", "5minute");
                this.model.set("chartWindow", "5minute-48hour");
                break;
            case "#chartLinkHourOneDay":
                this.model.set("epochType", "hourly");
                this.model.set("chartWindow",
                    "hour-1day");
                break;
            case "#chartLinkHourOneWeek":
                this.model.set("epochType", "hourly");
                this.model.set("chartWindow", "hour-1week");
                break;
            case "#chartLinkHourTwoWeeks":
                this.model.set("epochType", "hourly");
                this.model.set("chartWindow", "hour-2week");
                break;
            case "#chartLinkHourOneMonth":
                this.model.set("epochType", "hourly");
                this.model.set("chartWindow", "hour-1month");
                break;
            case "#chartLinkHourTwoMonths":
                this.model.set("epochType", "hourly");
                this.model.set("chartWindow", "hour-2month");
                break;
            case "#chartWeek":
                this.model.set("epochType",
                    "daily");
                this.model.set("chartWindow", "day-week");
                break;
            case "#chart2Week":
                this.model.set("epochType", "daily");
                this.model.set("chartWindow", "day-2week");
                break;
            case "#chartMonth":
                this.model.set("epochType", "daily");
                this.model.set("chartWindow", "day-month");
                break;
            case "#chart6Month":
                this.model.set("epochType", "daily");
                this.model.set("chartWindow", "day-6month");
                break;
            case "#chartYear":
                this.model.set("epochType", "daily");
                this.model.set("chartWindow", "day-year");
                break;
            case "#chartRange":
                this.model.set("epochType",
                    "daily"), this.model.set("chartWindow", "range")
        }
    },
    onRender: function () {
        this.$(".btn-group").button();
        this.$(".tip").tooltip();
        $("#chartRangeDatepickerEnd").val(DateHelpers.yesterdayDateStr());
        $("#chartRangeDatepickerStart").val("");
        $("#chartRangeDatepickerStart").datepicker({
            numberOfMonths: 1,
            showButtonPanel: !1,
            changeMonth: !0,
            changeYear: !0,
            dateFormat: "yymmdd"
        });
        $("#chartRangeDatepickerEnd").datepicker({
            numberOfMonths: 1,
            showButtonPanel: !1,
            changeMonth: !0,
            changeYear: !0,
            dateFormat: "yymmdd"
        })
    },
    onClose: function () {
        this.refreshTimerId &&
            this.stopChartAutoRefresh()
    },
    epochTypeChanged: function (a) {
        this.model.hasValidChartWindow() ? renderAndRefreshCharts() : this.model.setDefaultChartWindow()
    },
    renderAndRefreshCharts: function (a) {
        this.render();
        this.triggerChartRefresh()
    },
    displayTypeChanged: function (a) {
        this.triggerChartRefresh()
    },
    epochTypeButtonClicked: function (a) {
        a = $(a.target);
        this.model.set("epochType", a.val());
        $.ajax({
            url: "/settings/updateDefaultChartEpochType/" + a.val()
        });
        window.location.hash = a.data("nav")
    },
    chartWindowButtonClicked: function (a) {
        a =
            $(a.target);
        this.model.set("chartWindow", a.val());
        $.ajax({
            url: "/settings/updateDefaultChartWindow/" + a.val()
        });
        window.location.hash = a.data("nav")
    },
    displayTypeButtonClicked: function (a) {
        a = $(a.target);
        this.model.set("displayType", a.val());
        $.ajax({
            url: "/settings/updateDefaultChartDisplayType/" + a.val()
        })
    },
    rangeDateChanged: function (a) {
        this.model.set("endDateRange", this.$("#chartRangeDatepickerEnd").val());
        this.model.set("startDateRange", this.$("#chartRangeDatepickerStart").val());
        this.triggerChartRefresh()
    },
    autoRefreshClicked: function (a) {
        var b = this;
        null === this.refreshTimerId ? (this.autoRefreshCharts(), $.get("/settings/updateChartRefreshRate/" + this.refreshIntervalInMs, function () {
            b.model.set("chartRefreshRate", b.refreshIntervalInMs)
        })) : ($.get("/settings/updateChartRefreshRate/-1", function () {
            b.model.set("chartRefreshRate", -1)
        }), this.stopChartAutoRefresh())
    },
    autoRefreshCharts: function () {
        this.triggerChartRefresh();
        this.refreshTimerId = setTimeout(_.bind(this.autoRefreshCharts, this), this.refreshIntervalInMs)
    },
    stopChartAutoRefresh: function () {
        clearTimeout(this.refreshTimerId);
        this.refreshTimerId = null
    },
    triggerChartRefresh: function () {
        MMS.vent.trigger("chart:refreshChart")
    },
    showHideAdvancedControls: function (a) {
        this.model.set("showAdvancedControls", !this.model.get("showAdvancedControls"))
    },
    timeZoneSelected: function (a) {
        a.preventDefault();
        var b = $(a.target).data("id");
        _.isEmpty(b) && (b = null);
        this.model.set("timeZoneId", b);
        this.model.set("timeZoneDisplay", $(a.target).text())
    },
    exportHostCharts: function (a) {
        a.preventDefault();
        var b = MMS.Globals.CURRENT_CHART_TYPE || "status";
        a = $(a.target).data("format");
        var e = this.model.get("epochType"),
            c = this.model.getEpochCount(!1),
            d = this.model.get("displayType"),
            b = "/export/charts/" + b + "/" + MMS.Globals.GROUP_ID + "/" + MMS.Globals.CURRENT_HOST_ID + "/" + a + "/" + encodeURIComponent(MMS.Globals.TIME_ZONE_ID) + "/" + e + "/" + c + "/" + d;
        a = MMS.Globals.CURRENT_HOST_DB;
        e = MMS.Globals.CURRENT_RECORD_STATS_HOST_DB;
        c = $("#hostDbsSelect option:selected").val();
        d = {};
        a && (d.hostDbLockName = a);
        e && (d.hostDbRecordStatsName = e);
        c && (d.hostDbStatsName = c);
        window.open(b + "?" + $.param(d), "_blank")
    }
});
MMS.Views.ChartItemView = Backbone.Marionette.ItemView.extend({
    className: "chart-container expanded-chart",
    template: Handlebars.templates["charts/chart.hbs"],
    templateHelpers: function () {
        return (new MMS.Decorators.Chart(this.model)).decorate()
    },
    dygraphChart: null,
    triggerZoom: !1,
    modelEvents: {
        change: "modelChanged"
    },
    getColors: function () {
        return "#3890da #2413bd #11a348 #e8920b #cc2c1c #d0c910".split(" ")
    },
    initialize: function (a) {
        var b = this.model.get("dataSource");
        this.listenTo(MMS.vent, "chart:refreshChart", this.drawChart);
        this.listenTo(b, "change", this.dataSourceChanged);
        a && a.triggerZoom && (this.triggerZoom = a.triggerZoom)
    },
    onRender: function () {
        this.drawChart()
    },
    onClose: function () {
        this.dygraphChart && this.dygraphChart.destroy()
    },
    drawChart: function () {
        var a = _.bind(this.chartRendered, this),
            b = _.bind(this.chartZoomed, this),
            e = _.bind(this.underlayCallback, this);
        MMS.DygraphRenderer.renderChart(this.dygraphChart, this.model.getId(), this.model.get("dataSource"), this.model.get("dygraphOverrides"), this.getColors(), a, b, e)
    },
    chartRendered: function (a) {
        this.dygraphChart =
            a;
        this.trigger("chartRendered", {
            dygraphChart: a
        })
    },
    modelChanged: function () {
        this.render()
    },
    dataSourceChanged: function () {
        this.drawChart()
    },
    chartZoomed: function (a, b, e) {
        !0 === this.triggerZoom && MMS.vent.trigger("chart.zoom", {
            xAxisRange: this.dygraphChart.xAxisRange()
        })
    },
    underlayCallback: function (a, b, e) {
        if (!1 !== MMS.Globals.DISPLAY_CHART_ANNOTATIONS) {
            var c = this,
                d = this.model.get("dataSource"),
                f = MMS.Globals.CHART_EPOCH_CONTROLS;
            d.get("hostId") && (d = (new MMS.Models.HostEventDataSource({
                hostId: d.get("hostId")
            })).fetchData()) &&
                d.success(function (d) {
                c.displayHostEventsUnderlay(d, f.get("epochType"), a, b, e)
            })
        }
    },
    displayHostEventsUnderlay: function (a, b, e, c, d) {
        _.each(a, function (a) {
            var g = (new Date(a.eventTime)).getTime(),
                h = 12E4;
            "5minute" === b ? h = 3E5 : "hourly" === b ? h = 36E5 : "daily" === b && (h = 36E5);
            h = g + h;
            g = d.toDomCoords(g, -20);
            h = d.toDomCoords(h, 20);
            g = g[0];
            h = h[0];
            1 == a.type ? e.fillStyle = "rgba(255, 0, 0, 0.7)" : 4 == a.type ? e.fillStyle = "rgba(51, 0, 51, 1)" : 5 == a.type && (e.fillStyle = "rgba(204, 204, 51, 1)");
            e.fillRect(g, c.y, h - g, c.h)
        })
    },
    getChartInfoDialogId: function (a) {
        return strEndsWith(a,
            "iostat-count-chart") ? "#iostat-count-chart-info" : strEndsWith(a, "iostat-time-chart") ? "#iostat-time-chart-info" : "dblocks-.-lockPercent-count-chart" === a || -1 !== a.indexOf("timeLockedMicros") ? "#fixed-global-lock-ratio-chart-info" : -1 !== a.indexOf("recordStats") || -1 != a.indexOf("recordstats") ? "#fixed-recordstats-chart-info" : 0 === a.indexOf("dynamic-xgendbVals") ? (a = "#dbCharts-" + a.split("-").slice(2).join("-"), a = a.replace("count-chart", "gauge-raw-info")) : "dblocks-alerts-lockPercent-count-chart" === a ? "#fixed-global-lock-ratio-chart-info" :
            "#" + a + "-info"
    }
});
MMS.Views.ClusterChartItemView = MMS.Views.ChartItemView.extend({
    initialize: function (a) {
        a = this.model.get("dataSource");
        var b = a.get("clusterChartControls");
        this.listenTo(MMS.vent, "chart:refreshChart", this.drawChart);
        this.listenTo(a, "change", this.dataSourceChanged);
        this.listenTo(b, "change", this.drawChart)
    },
    getColors: function () {
        return this.model.get("dataSource").get("clusterChartControls").getHostColors()
    }
});
MMS.Views.ShardChunkChartItemView = MMS.Views.ClusterChartItemView.extend({
    getColors: function () {
        return this.model.get("dataSource").get("clusterChartControls").getShardColors()
    }
});
MMS.Views.ExpandedChartLayout = Backbone.Marionette.Layout.extend({
    template: Handlebars.templates["charts/expanded_chart.hbs"],
    regions: {
        chart: ".chartElement"
    },
    initialize: function () {
        this.chartView = new MMS.Views.ChartItemView({
            model: this.model
        })
    },
    onRender: function () {
        this.insertLegendFromChartInfoDialog();
        this.chart.show(this.chartView)
    },
    insertLegendFromChartInfoDialog: function () {
        var a = this.model.get("dataSource").get("chartId"),
            a = this.chartView.getChartInfoDialogId(a);
        $("#chartInfo").empty();
        a = $(a).find("table").clone();
        a.removeClass().addClass("table-condensed").css("font-size", "12px");
        a.find("td").css("vertical-align", "top");
        a.find("[class^=chartSeries]").removeClass().each(function (a, e) {
            var c = a % 6 + 1;
            $(e).addClass("chartInfoFont" + c);
            $(e).css("white-space", "nowrap")
        });
        this.$("#chartInfo").html(a)
    }
});
MMS.Views.ChartWithHeaderItemView = Backbone.Marionette.Layout.extend({
    className: "chart-container",
    template: Handlebars.templates["charts/chart_with_header.hbs"],
    templateHelpers: function () {
        return (new MMS.Decorators.ChartWithHeader(this.model)).decorate()
    },
    regions: {
        chart: ".chartElement"
    },
    events: {
        "click .chartInfoButton": "showChartInfoDialog",
        "click .bookmarkChartButton": "bookmarkChart",
        "click .expandChartButton": "expandChart",
        "click .emailChartButton": "emailChart",
        "click .dashAddButton": "addChartToDashboard",
        "click .dashRemoveButton": "removeChartFromDashboard",
        "change .hostStatusDbsSelect": "hostStatusDbsChanged",
        "change .hostStatusRecordStatsDbsSelect": "hostStatusRecordStatsDbsChanged"
    },
    initialize: function () {
        this.chartView = new MMS.Views.ChartItemView({
            model: this.model,
            className: "chart-container-inner",
            triggerZoom: !0
        });
        this.listenTo(MMS.vent, "chart.zoom", this.zoomChart);
        this.listenTo(this.chartView, "chartRendered", this.chartRendered)
    },
    onRender: function () {
        this.chart.show(this.chartView);
        this.$(".tip").tooltip()
    },
    chartRendered: function (a) {
        this.trigger("chartRendered", {
            dygraphChart: a.dygraphChart
        })
    },
    zoomChart: function (a) {
        this.chartView.dygraphChart && this.chartView.dygraphChart.updateOptions({
            dateWindow: a.xAxisRange
        })
    },
    showChartInfoDialog: function (a) {
        a = this.model.get("dataSource").get("chartId");
        $(".chartInfo").hide();
        $(this.chartView.getChartInfoDialogId(a)).show();
        $("#chartInfoContainer").find(".modal-header h3").text(MMS.i18n.hostChartInfoDialogTitle);
        $("#chartInfoContainer").modal({
            show: !0
        })
    },
    bookmarkChart: function (a) {
        a =
            this.model.get("dataSource");
        window.location = "/chart/createBookmark/" + MMS.Globals.GROUP_ID + "/" + encodeURIComponent(a.getUrl())
    },
    expandChart: function (a) {
        a = this.model.clone();
        var b = this.model.get("dataSource").clone();
        b.set("expanded", !0);
        a.set("dataSource", b);
        $("#chartDetailChartId").val(b.get("chartId"));
        $("#chartDetailHostId").val(b.get("hostId"));
        $("#chartDetailDialog").find(".modal-header h3").text(a.get("displayName"));
        "dashboard" === MMS.Globals.CURRENT_CHART_TYPE && $("#chartDetailDialog .modal-footer").hide();
        var e = new MMS.Views.ExpandedChartLayout({
            model: a
        });
        $("#chartDetailDialog").one("shown.bs.modal", function () {
            $("#expandedChartContainer").html(e.render().el)
        });
        $("#chartDetailDialog").one("hidden.bs.modal", function () {
            e.close()
        });
        $("#chartDetailDialog").modal({
            show: !0
        })
    },
    emailChart: function (a) {
        a = this.model.get("dataSource");
        $("#chartEmailQueryUrl").attr("value", a.getUrl());
        $("#chartEmailAddr").val("");
        $("#chartEmailMsg").val("");
        $("#chartEmailHostId").attr("value", a.get("hostId"));
        $("#chartEmailChartId").attr("value",
            a.get("chartId"));
        $(".formError").hide();
        $("#chartEmailDialog").modal({
            show: !0
        })
    },
    addChartToDashboard: function (a) {
        a = this.model.get("dataSource");
        $("#addToDashboardChartId").val(a.get("chartId"));
        $("#addToDashboardHostId").val(a.get("hostId"));
        $(".formError").hide();
        $("#addChartToDashboardContainer").modal({
            show: !0
        })
    },
    removeChartFromDashboard: function (a) {
        a = this.model.get("dataSource");
        a = "/dashboard/removeChart/" + MMS.Globals.CURRENT_DASHBOARD_ID + "/" + a.get("chartId") + "/" + this.model.get("dashboardUniqueChartId") +
            "/" + MMS.Globals.GROUP_ID + "?regexp=" + this.model.get("regexp") + "&replicaSetId=" + this.model.get("rsId");
        $.ajax({
            url: a,
            success: function () {
                window.location.reload(!0)
            }
        })
    },
    hostStatusDbsChanged: function (a) {
        a = this.$(".hostStatusDbsSelect option:selected").text();
        "global" === a && (a = null);
        MMS.Globals.CURRENT_HOST_DB = a;
        this.chartView.drawChart()
    },
    hostStatusRecordStatsDbsChanged: function (a) {
        a = this.$(".hostStatusRecordStatsDbsSelect option:selected").text();
        "global" === a && (a = null);
        MMS.Globals.CURRENT_RECORD_STATS_HOST_DB =
            a;
        this.chartView.drawChart()
    }
});
MMS.Views.ChartEmptyView = Backbone.View.extend({
    tagName: "div",
    className: "well text-center",
    render: function () {
        hideLoading();
        this.$el.html("<em>No Charts</em>");
        return this
    }
});
MMS.Views.ChartCollectionView = Backbone.Marionette.CollectionView.extend({
    itemView: MMS.Views.ChartWithHeaderItemView,
    emptyView: MMS.Views.ChartEmptyView,
    initialize: function (a) {
        this.listenTo(MMS.vent, "chart:refreshChart", _.bind(this.onRefreshChart, this))
    },
    onBeforeRender: function () {
        this.ensureAllChartsUseSameRange()
    },
    onRefreshChart: function () {
        showLoading();
        this.ensureAllChartsUseSameRange()
    },
    ensureAllChartsUseSameRange: function () {
        var a = this,
            b = this.collection.length,
            e, c;
        this.on("itemview:chartRendered", function (d, f) {
            var g, h;
            b -= 1;
            if (null !== f.dygraphChart) {
                h = f.dygraphChart.xAxisRange();
                a: {
                    g = f.dygraphChart;
                    var l, k, p;
                    for (l = 0; l < g.numRows(); l++) {
                        p = g.getValue(l, 0);
                        for (k = 1; k < g.numColumns(); k++) if (null !== g.getValue(l, k)) {
                                g = p;
                                break a
                            }
                    }
                    g = h[0]
                }
                if (!e || e > g) e = g;
                c || (c = h[1])
            }
            0 === b && (a.off("itemview:chartRendered"), e && c && MMS.vent.trigger("chart.zoom", {
                xAxisRange: [e, c]
            }), hideLoading())
        })
    }
});
MMS.Views.GroupedChartCollectionView = MMS.Views.ChartCollectionView.extend({
    uniqueId: _.uniqueId("groupedChartCollection"),
    lookupEntries: [],
    getGroupDivId: function (a) {
        return [this.uniqueId, a].join("-").replace(/[ %\/]/g, "-")
    },
    createGroupDivNode: function (a) {
        var b = document.createElement("div");
        b.id = a;
        b.className = "clearfix";
        return b
    },
    insertGroupDiv: function (a, b, e) {
        b = {
            displayName: b,
            div: e
        };
        var c = _.sortedIndex(this.lookupEntries, b, "displayName");
        this.lookupEntries.splice(c, 0, b);
        c === this.lookupEntries.length -
            1 ? a.appendChild(e) : a.insertBefore(e, this.lookupEntries[c + 1].div)
    },
    findOrCreateGroupSection: function (a, b) {
        var e = b.get("displayName"),
            c = this.getGroupDivId(e),
            d = a.querySelector("#" + c);
        d || (d = this.createGroupDivNode(c), this.insertGroupDiv(a, e, d));
        return d
    },
    appendHtml: function (a, b, e) {
        this.findOrCreateGroupSection(a.isBuffering ? a.elBuffer : a.el, b.model).appendChild(b.el)
    }
});
MMS.Views.ClusterChartControlsView = Backbone.Marionette.ItemView.extend({
    template: Handlebars.templates["charts/clusterChartControls.hbs"],
    templateHelpers: function () {
        return (new MMS.Decorators.ClusterChartControls(this.model)).decorate()
    },
    events: {
        "click .shardToggle": "shardToggleClicked",
        "click .host-type-select a": "hostTypeClicked",
        "click .collapseToggle": "shardPanelCollapse"
    },
    modelEvents: {},
    onRender: function () {},
    shardToggleClicked: function (a) {
        var b = $(a.target);
        a = this.model.get("shards");
        if (a = _.find(a, function (a) {
            return a.id == b.data("shardid")
        })) a.checked = !a.checked;
        this.model.trigger("change")
    },
    hostTypeClicked: function (a) {
        a = $(a.target);
        this.$(".host-type-select li").removeClass("active");
        a.closest("li").addClass("active");
        this.model.set("hostTypes", a.text())
    },
    shardPanelCollapse: function (a) {
        a = $(a.target).closest("a").data("shardid");
        a = this.$("#chevron-" + a);
        a.hasClass("icon-chevron-right") ? a.removeClass("icon-chevron-right").addClass("icon-chevron-down") : a.removeClass("icon-chevron-down").addClass("icon-chevron-right")
    }
});
(function () {
    MMS.Globals.bindClusterEvents = function (a, b, e, c) {
        function d() {
            function b() {
                var a = g();
                if ("chunk-chart" === a) {
                    if (!0 === e || void 0 === e) $("#clusterChunkCollectionSelectContainer").show(), r.show(new MMS.Views.ShardChunkChartItemView({
                            model: n
                        })), e = !1
                } else {
                    if (!1 === e || void 0 === e) $("#clusterChunkCollectionSelectContainer").hide(), r.show(new MMS.Views.ClusterChartItemView({
                            model: p
                        }));
                    c.set("chartId", a);
                    e = !0
                }
            }
            var c = new MMS.Models.ManyHostDataSource({
                chartId: g(),
                clusterChartControls: k
            });
            p = new MMS.Models.Chart({
                dataSource: c,
                dygraphOverrides: {
                    fillGraph: !1
                }
            });
            var d = new MMS.Models.ShardChunkDataSource({
                chartId: "chunk-chart",
                clusterId: a,
                namespace: h(),
                clusterChartControls: k
            });
            n = new MMS.Models.Chart({
                dataSource: d,
                dygraphOverrides: {
                    stackedGraph: !0
                }
            });
            m = new MMS.Views.ClusterChartControlsView({
                model: k
            });
            $("#shardingChartLegend").html(m.render().el);
            r = new Backbone.Marionette.Region({
                el: "#clusterChartContainer"
            });
            var e;
            b();
            $("#clusterChartGraphSelect").on("change", function () {
                b()
            });
            $("#clusterChunkCollectionSelect").on("change", function () {
                d.set("namespace", h())
            })
        }

        function f() {
            q = new MMS.Views.ChartCollectionView({
                collection: l
            });
            $("#mongosCharts").append(q.render().el);
            $("#mongosChartIdSelect").on("change", function () {
                var a = $("#mongosChartIdSelect option:selected");
                l.each(function (b) {
                    b.get("dataSource").set({
                        chartId: a.attr("id")
                    }, {
                        silent: !0
                    });
                    b.set({
                        displayName: a.text()
                    }, {
                        silent: !0
                    })
                });
                q.render()
            })
        }

        function g() {
            return $("#clusterChartGraphSelect option:selected").val()
        }

        function h() {
            return $("#clusterChunkCollectionSelect option:selected").val()
        }
        var l = new MMS.Collections.Charts;
        _.each(c, function (a) {
            var b = new MMS.Models.HostDataSource({
                hostId: a.hostId,
                chartId: "fixed-opcounters-query-chart"
            });
            l.add({
                dataSource: b,
                hostname: a.hostname,
                hostType: a.hostType,
                displayName: "query"
            })
        });
        var k = new MMS.Models.ClusterChartControls({}, {
            shardIds: b,
            shardHosts: e
        }),
            p, n, q, m, r;
        $("#clusterTabs").on("shown.bs.tab", "a", function (a) {
            a = $(a.target).data("tabname");
            "shardingTab" === a ? (q && (q.close(), q = null, $("#mongosChartIdSelect").off("change")), d()) : "mongosTab" === a && (m &&
                r && (m.close(), m = null, r.close(), r = null, $("#clusterChartGraphSelect").off("change"), $("#clusterChunkCollectionSelect").off("change")), f())
        })
    }
})();
(function () {
    var a = null,
        b = [];
    MMS.Globals.updateChartDefs = function (a) {
        b = a
    };
    MMS.Globals.bindHostEvents = function (e, c, d) {
        function f(d) {
            var f = new MMS.Collections.Charts;
            _.map(b, function (a) {
                var b = new MMS.Models.HostDataSource({
                    hostId: e,
                    chartId: a.chartId
                });
                f.add(new MMS.Models.Chart({
                    dataSource: b,
                    hostname: c,
                    displayName: a.displayName
                }))
            });
            a = new MMS.Views.ChartCollectionView({
                collection: f
            });
            $(d).html(a.render().el)
        }(function () {
            $("#hostDbsSelect").change(function () {
                var a = $("#hostDbsSelect option:selected");
                $.getJSON("/user/setLastDb?n=" + encodeURIComponent(a.val()), function (a) {
                    a = $("#hostTabs").find("a[data-tabname=hostDbsTab]");
                    a.parent().removeClass("active");
                    $(a.data("target")).removeClass("active");
                    a.tab("show")
                })
            });
            $("#dbListEditBtn").click(function () {
                window.location = $(this).data("href")
            })
        })();
        $("#hostTabs").on("shown.bs.tab", "a", function (b) {
            b = $(b.target).data("tabname");
            MMS.Globals.CURRENT_HOST_DB = null;
            MMS.Globals.CURRENT_RECORD_STATS_HOST_DB = null;
            a && (a.close(), a = null);
            "hostStatusTab" === b && (MMS.Globals.CURRENT_CHART_TYPE =
                "status", f("#statusCharts"));
            "hostHardwareTab" === b && (MMS.Globals.CURRENT_CHART_TYPE = "hardware", f("#hardwareCharts"));
            "hostDbsTab" === b ? (MMS.Globals.CURRENT_CHART_TYPE = "dbstats", f("#dbstatsCharts"), $("#hostDbsChoose").show()) : $("#hostDbsChoose").hide();
            $(".with-tooltip").tooltip()
        });
        $("#hostTabs").bootstrap_tabs()
    }
})();
(function () {
    MMS.initializeActivityModule = function (a, b, e) {
        var c = new MMS.Collections.Alerts;
        c.setMode("OPEN");
        c.setPaginationItemCount(a);
        c.setPaginationPageSize(a);
        c.setPaginationStartTimestamp(e);
        a = new MMS.Views.AlertCollectionView({
            collection: c
        });
        $("#openAlertList").append(a.render().el);
        c = c.fetchPage({
            silent: !0
        });
        a = new MMS.Collections.Events;
        a.setPaginationItemCount(b);
        a.setPaginationStartTimestamp(e);
        var d = new MMS.Views.EventCollectionView({
            collection: a
        });
        $("#eventList").append(d.render().el);
        b = a.fetchPage({
            silent: !0
        });
        $.when(c, b).then(function () {
            $("#activityContent").show();
            d.initInfiniteScroll("#eventListLoader")
        })
    };
    MMS.initializeClosedAlertsModule = function (a, b) {
        var e = new MMS.Collections.Alerts;
        e.setMode("CLOSED");
        e.setPaginationItemCount(a);
        e.setPaginationStartTimestamp(b);
        var c = new MMS.Views.AlertCollectionView({
            collection: e
        });
        $("#alertList").append(c.render().el);
        e = e.fetchPage({
            silent: !0
        });
        $.when(e).then(function () {
            c.initInfiniteScroll("#alertListLoader")
        })
    };
    MMS.initializeAlertConfigModule = function () {
        var a = $.getJSON("/activity/metrics/" + MMS.Globals.GROUP_ID),
            b = $.getJSON("/activity/users/" + MMS.Globals.GROUP_ID);
        $.when(a, b).then(function (a, b) {
            var d = new MMS.Collections.AlertConfigs,
                f = new MMS.Views.AlertConfigCollectionView({
                    collection: d,
                    metrics: a[0],
                    users: b[0]
                });
            $("#manageAlerts").append(f.render().el);
            $("#addAlert").click(function () {
                var a = new MMS.Collections.Matchers,
                    b = new MMS.Collections.Notifications([{
                            _t: "GROUP",
                            cid: MMS.Globals.GROUP_ID,
                            gn: MMS.Globals.GROUP_NAME,
                            email: !0,
                            sms: !1
                        }]),
                    a = new MMS.Models.AlertConfig({
                        _t: "HOST",
                        cid: MMS.Globals.GROUP_ID,
                        enabled: !0,
                        matchers: a,
                        notify: b
                    });
                f.showEditDialog(a)
            });
            d.fetch({
                silent: !0
            })
        })
    }
})();
MMS.i18n.Activity = {};
MMS.i18n.Activity.Types = {
    HOST: "Host",
    HOST_METRIC: "Host",
    AGENT: "Agent",
    BACKUP: "Backup",
    REPLICA_SET: "Replica Set",
    CLUSTER: "Cluster",
    USER: "User"
};
MMS.i18n.Activity.EventTypeOptionStrings = {
    HOST_DOWN: "is down",
    HOST_RECOVERING: "is recovering",
    VERSION_BEHIND: "does not have the latest version",
    MONITORING_AGENT_DOWN: "Monitoring Agent is down",
    BACKUP_AGENT_DOWN: "Backup Agent is down",
    OPLOG_BEHIND: "Oplog Behind",
    RESYNC_REQUIRED: "Resync Required"
};
MMS.i18n.Activity.OfHostTypes = {
    ANY: "of any type",
    1: "of type Standalone",
    7: "of type Primary",
    8: "of type Secondary",
    2: "of type Mongos",
    3: "of type Conf"
};
MMS.i18n.Activity.HostTypes = {
    ANY: "Any",
    1: "Standalone",
    7: "Primary",
    8: "Secondary",
    2: "Mongos",
    3: "Conf"
};
MMS.i18n.Activity.MetricModes = {
    AVERAGE: "avg/sec",
    TOTAL: "total/min"
};
MMS.i18n.Activity.MetricOperations = {
    GREATER_THAN: "above",
    LESS_THAN: "below"
};
MMS.i18n.Activity.MetricUnits = {
    RAW: "",
    MILLISECONDS: "milliseconds",
    SECONDS: "seconds",
    MINUTES: "minutes",
    HOURS: "hours",
    DAYS: "days",
    BYTES: "bytes",
    KILOBYTES: "KB",
    MEGABYTES: "MB",
    GIGABYTES: "GB",
    TERABYTES: "TB",
    PETABYTES: "PB",
    BITS: "bits",
    KILOBITS: "Kbits",
    MEGABITS: "Mbits",
    GIGABITS: "Gbits"
};
MMS.i18n.Activity.MetricNames = {
    ASSERT_REGULAR: "Asserts: Regular",
    ASSERT_WARNING: "Asserts: Warning",
    ASSERT_MSG: "Asserts: Msg",
    ASSERT_USER: "Asserts: User",
    OPCOUNTER_CMD: "Opcounter: Cmd",
    OPCOUNTER_QUERY: "Opcounter: Query",
    OPCOUNTER_UPDATE: "Opcounter: Update",
    OPCOUNTER_DELETE: "Opcounter: Delete",
    OPCOUNTER_INSERT: "Opcounter: Insert",
    OPCOUNTER_REPL_UPDATE: "Opcounter: Repl Update",
    OPCOUNTER_REPL_DELETE: "Opcounter: Repl Delete",
    OPCOUNTER_REPL_INSERT: "Opcounter: Repl Insert",
    MEMORY_RESIDENT: "Memory: Resident",
    MEMORY_VIRTUAL: "Memory: Virtual",
    MEMORY_MAPPED: "Memory: Mapped",
    COMPUTED_MEMORY: "Memory: Computed",
    INDEX_COUNTERS_BTREE_ACCESSES: "B-tree: accesses",
    INDEX_COUNTERS_BTREE_HITS: "B-tree: hits",
    INDEX_COUNTERS_BTREE_MISSES: "B-tree: misses",
    INDEX_COUNTERS_BTREE_MISS_RATIO: "B-tree: miss ratio",
    GLOBAL_LOCK_PERCENTAGE: "Global Lock %",
    BACKGROUND_FLUSH_AVG: "Background Flush Average",
    CONNECTIONS: "Connections",
    CONNECTIONS_MAX: "Connections Max",
    GLOBAL_LOCK_CURRENT_QUEUE_TOTAL: "Queues: Total",
    GLOBAL_LOCK_CURRENT_QUEUE_READERS: "Queues: Readers",
    GLOBAL_LOCK_CURRENT_QUEUE_WRITERS: "Queues: Writers",
    CURSORS_TOTAL_OPEN: "Cursors: Open",
    CURSORS_TOTAL_TIMED_OUT: "Cursors: Timed Out",
    CURSORS_TOTAL_CLIENT_CURSORS_SIZE: "Cursors: Client Cursors Size",
    NETWORK_BYTES_IN: "Network: Bytes In",
    NETWORK_BYTES_OUT: "Network: Bytes Out",
    NETWORK_NUM_REQUESTS: "Network: Num Requests",
    OPLOG_MASTER_TIME: "Replica Time",
    OPLOG_SLAVE_LAG_MASTER_TIME: "Replication Lag",
    EXTRA_INFO_PAGE_FAULTS: "Page Faults",
    DB_STORAGE_TOTAL: "DB Storage",
    JOURNALING_COMMITS_IN_WRITE_LOCK: "Journaling Commits In Write Lock",
    JOURNALING_MB: "Journaling MB",
    JOURNALING_WRITE_DATA_FILES_MB: "Journaling Write Data Files MB"
};
MMS.i18n.Activity.MatcherOperations = {
    EQUALS: "is",
    NOT_EQUALS: "is not",
    CONTAINS: "contains",
    NOT_CONTAINS: "does not contain",
    STARTS_WITH: "starts with",
    ENDS_WITH: "ends with",
    REGEX: "matches"
};
MMS.i18n.Activity.HostFields = {
    hostname: "Hostname",
    port: "Host Port",
    hostnameAndPort: "Hostname And Port",
    replicaSetId: "Replica Set"
};
MMS.i18n.Activity.NotificationIcons = {
    SMS: "icon-mobile-phone icon-large",
    EMAIL: "icon-envelope-alt",
    GROUP: "icon-group",
    USER: "icon-user",
    SNMP: "icon-globe",
    HIP_CHAT: "icon-comment"
};
MMS.i18n.Activity.EventIcons = {
    NEW_HOST: "icon-info-sign",
    HOST_RESTARTED: "icon-info-sign",
    HOST_UPGRADED: "icon-info-sign",
    HOST_NOW_PRIMARY: "icon-info-sign",
    HOST_NOW_SECONDARY: "icon-info-sign",
    HOST_UP: "icon-ok",
    HOST_DOWN: "icon-warning-sign",
    HOST_RECOVERED: "icon-ok",
    HOST_RECOVERING: "icon-warning-sign",
    VERSION_CURRENT: "icon-ok",
    VERSION_BEHIND: "icon-warning-sign",
    DB_PROFILER_ENABLE_AUDIT: "icon-info-sign",
    DB_PROFILER_DISABLE_AUDIT: "icon-info-sign",
    ADD_HOST_AUDIT: "icon-info-sign",
    DELETE_HOST_AUDIT: "icon-info-sign",
    UNDELETE_HOST_AUDIT: "icon-info-sign",
    HIDE_HOST_AUDIT: "icon-info-sign",
    HIDE_AND_DISABLE_HOST_AUDIT: "icon-info-sign",
    DISABLE_HOST_AUDIT: "icon-info-sign",
    REACTIVATE_HOST_AUDIT: "icon-info-sign",
    DEACTIVATE_HOST_AUDIT: "icon-info-sign",
    HOST_IP_CHANGED_AUDIT: "icon-info-sign",
    MONITORING_AGENT_UP: "icon-ok",
    MONITORING_AGENT_DOWN: "icon-warning-sign",
    BACKUP_AGENT_UP: "icon-ok",
    BACKUP_AGENT_DOWN: "icon-warning-sign",
    OPLOG_CURRENT: "icon-ok",
    OPLOG_BEHIND: "icon-warning-sign",
    RESYNC_PERFORMED: "icon-ok",
    RESYNC_REQUIRED: "icon-warning-sign",
    RS_STATE_CHANGED_AUDIT: "icon-info-sign",
    CLUSTER_STATE_CHANGED_AUDIT: "icon-info-sign",
    RESTORE_REQUESTED_AUDIT: "icon-info-sign",
    SYNC_REQUIRED_AUDIT: "icon-info-sign",
    SYNC_PENDING_AUDIT: "icon-info-sign",
    CLUSTERSHOT_DELETED_AUDIT: "icon-info-sign",
    SNAPSHOT_DELETED_AUDIT: "icon-info-sign",
    CONFIGURATION_CHANGED: "icon-info-sign",
    PRIMARY_ELECTED: "icon-ok",
    NO_PRIMARY: "icon-warning-sign"
};
MMS.i18n.Activity.EventTypeDescription = {
    NEW_HOST: "is new",
    HOST_RESTARTED: "has restarted",
    HOST_UPGRADED: "has been upgraded",
    HOST_NOW_PRIMARY: "is now primary",
    HOST_NOW_SECONDARY: "is now secondary",
    HOST_UP: "is up",
    HOST_DOWN: "is down",
    HOST_RECOVERED: "has recovered",
    HOST_RECOVERING: "is recovering",
    VERSION_CURRENT: "has the latest version",
    VERSION_BEHIND: "does not have the latest version",
    DB_PROFILER_ENABLE_AUDIT: "Database profiling has been enabled",
    DB_PROFILER_DISABLE_AUDIT: "Database profiling has been disabled",
    ADD_HOST_AUDIT: "Host has been added",
    DELETE_HOST_AUDIT: "Host has been deleted",
    UNDELETE_HOST_AUDIT: "Host has been undeleted",
    HIDE_HOST_AUDIT: "Host has been hidden",
    HIDE_AND_DISABLE_HOST_AUDIT: "Host has been disabled and hidden",
    DISABLE_HOST_AUDIT: "Host has been disabled",
    REACTIVATE_HOST_AUDIT: "Host has been reactivated",
    DEACTIVATE_HOST_AUDIT: "Host has been deactivated",
    HOST_IP_CHANGED_AUDIT: "Host IP address has been changed",
    MONITORING_AGENT_UP: "is up",
    MONITORING_AGENT_DOWN: "is down",
    BACKUP_AGENT_UP: "is up",
    BACKUP_AGENT_DOWN: "is down",
    OPLOG_CURRENT: "is current",
    OPLOG_BEHIND: "oplog is behind",
    RESYNC_PERFORMED: "has been resynced",
    RESYNC_REQUIRED: "requires a resync",
    RS_STATE_CHANGED_AUDIT: "Replica Set backup state is now ",
    CLUSTER_STATE_CHANGED_AUDIT: "Cluster backup state is now ",
    RESTORE_REQUESTED_AUDIT: "A restore has been requested",
    SYNC_REQUIRED_AUDIT: "Backup sync is required",
    SYNC_PENDING_AUDIT: "Backup sync is pending",
    CLUSTERSHOT_DELETED_AUDIT: "Cluster snapshot has been deleted",
    SNAPSHOT_DELETED_AUDIT: "Snapshot has been deleted",
    CONFIGURATION_CHANGED: "has an updated configuration",
    PRIMARY_ELECTED: "elected a new primary",
    NO_PRIMARY: "has no primary"
};
MMS.Decorators.MetricThreshold = function (a) {
    this.model = a;
    this.decorate = function () {
        return {
            metric: MMS.i18n.Activity.MetricNames[this.model.get("metric")],
            op: MMS.i18n.Activity.MetricOperations[this.model.get("op")],
            mode: MMS.i18n.Activity.MetricModes[this.model.get("mode")],
            units: MMS.i18n.Activity.MetricUnits[this.model.get("units")]
        }
    }
};
MMS.Decorators.Matcher = function (a) {
    this.model = a;
    this.decorate = function () {
        return {
            field: MMS.i18n.Activity.HostFields[this.model.get("field")],
            op: MMS.i18n.Activity.MatcherOperations[this.model.get("op")]
        }
    }
};
MMS.Decorators.Notification = function (a) {
    this.model = a;
    this.getName = function () {
        var a = this.model.get("_t");
        if ("SMS" === a) return this.model.get("mobileNumber");
        if ("EMAIL" === a) return this.model.get("emailAddress");
        if ("GROUP" === a) return this.model.get("gn");
        if ("USER" === a) return this.model.get("un");
        if ("SNMP" === a) return this.model.get("snmpAddress");
        if ("HIP_CHAT" === a) return this.model.get("roomName")
    };
    this.decorate = function () {
        return {
            icon: MMS.i18n.Activity.NotificationIcons[this.model.get("_t")],
            name: this.getName()
        }
    }
};
MMS.Decorators.AlertConfig = function (a) {
    this.model = a;
    this.getDisplayType = function () {
        if ("AGENT" !== this.model.getNormalizedType() && "BACKUP" !== this.model.getNormalizedType()) return MMS.i18n.Activity.Types[this.model.get("_t")]
    };
    this.getHostType = function () {
        if ("HOST" === this.model.getNormalizedType()) return MMS.i18n.Activity.HostTypes[this.model.getCurrentHostType()]
    };
    this.getMetricThreshold = function () {
        var a = this.model.get("mt");
        if (a) return _.extend(a.toJSON(), (new MMS.Decorators.MetricThreshold(a)).decorate())
    };
    this.getMatchers = function () {
        var a = this.model.get("matchers");
        if (a) return a = a.filter(function (a) {
                return !a.isHostTypeMatcher()
            }), a.map(function (a) {
                return _.extend(a.toJSON(), (new MMS.Decorators.Matcher(a)).decorate())
            })
    };
    this.getNotify = function () {
        var a = this.model.get("notify");
        if (a) return a.map(function (a) {
                return _.extend(a.toJSON(), (new MMS.Decorators.Notification(a)).decorate())
            })
    };
    this.getTypeWithHost = function () {
        var a = MMS.i18n.Activity.Types[this.model.get("_t")];
        return "ANY" === this.model.getCurrentHostType() ?
            a : this.getHostType() + " " + a
    };
    this.getOfHostType = function () {
        if ("HOST" === this.model.getNormalizedType()) return MMS.i18n.Activity.OfHostTypes[this.model.getCurrentHostType()]
    };
    this.decorate = function () {
        return {
            _t: MMS.i18n.Activity.Types[this.model.get("_t")],
            displayType: this.getDisplayType(),
            hostType: this.getHostType(),
            et: MMS.i18n.Activity.EventTypeOptionStrings[this.model.get("et")],
            mt: this.getMetricThreshold(),
            matchers: this.getMatchers(),
            notify: this.getNotify(),
            typeWithHost: this.getTypeWithHost(),
            ofHostType: this.getOfHostType()
        }
    }
};
MMS.Models.MetricThreshold = Backbone.Model.extend({
    defaults: {
        metric: null,
        op: null,
        threshold: null,
        mode: "AVERAGE",
        units: "RAW"
    },
    onValidate: function (a, b) {
        a.notNull("metric", this.get("metric"), b);
        a.notNull("op", this.get("op"), b);
        a.notNull("threshold", this.get("threshold"), b);
        a.isNumeric("threshold", this.get("threshold"), {
            min: 0
        }, b);
        a.notNull("mode", this.get("mode"), b);
        a.notNull("units", this.get("units"), b)
    }
});
_.extend(MMS.Models.MetricThreshold.prototype, MMS.Models.ValidationMixin);
MMS.Models.Matcher = Backbone.Model.extend({
    defaults: {
        field: null,
        op: null,
        value: null
    },
    onValidate: function (a, b) {
        a.notNull("field", this.get("field"), b);
        a.notNull("op", this.get("op"), b);
        a.notNull("value", this.get("value"), b)
    },
    isHostTypeMatcher: function () {
        return "typeIds" === this.get("field")
    }
});
_.extend(MMS.Models.Matcher.prototype, MMS.Models.ValidationMixin);
MMS.Collections.Matchers = Backbone.Collection.extend({
    model: MMS.Models.Matcher
});
MMS.Models.Notification = Backbone.Model.extend({
    defaults: {
        _t: null,
        interval: 5,
        delay: 0,
        cid: void 0,
        gn: void 0,
        un: void 0,
        emailAddress: void 0,
        mobileNumber: void 0,
        snmpAddress: void 0,
        email: void 0,
        sms: void 0,
        roomName: void 0,
        notificationToken: void 0
    },
    onValidate: function (a, b) {
        a.isNumeric("interval", this.get("interval"), {
            min: 5
        }, b);
        a.isNumeric("delay", this.get("delay"), {
            min: 0
        }, b);
        var e = this.get("_t");
        "GROUP" === e ? (a.notUndefined("cid", this.get("cid"), b), this.validateEmailOrSms(b)) : "USER" === e ? (a.notUndefined("un",
            this.get("un"), b), a.notBlank("un", this.get("un"), b), this.validateEmailOrSms(b)) : "EMAIL" === e ? (a.notUndefined("emailAddress", this.get("emailAddress"), b), a.notBlank("emailAddress", this.get("emailAddress"), b)) : "SMS" === e ? (a.notUndefined("mobileNumber", this.get("mobileNumber"), b), a.notBlank("mobileNumber", this.get("mobileNumber"), b)) : "SNMP" === e ? (a.notUndefined("snmpAddress", this.get("snmpAddress"), b), a.notBlank("snmpAddress", this.get("snmpAddress"), b)) : "HIP_CHAT" === e && (a.notUndefined("roomName", this.get("roomName"),
            b), a.notBlank("roomName", this.get("roomName"), b), a.notUndefined("notificationToken", this.get("notificationToken"), b), a.notBlank("notificationToken", this.get("notificationToken"), b))
    },
    validateEmailOrSms: function (a) {
        !0 === this.get("email") || !0 === this.get("sms") || (a.email = "must be true if not sms", a.sms = "must be true if not email")
    }
});
_.extend(MMS.Models.Notification.prototype, MMS.Models.ValidationMixin);
MMS.Collections.Notifications = Backbone.Collection.extend({
    model: MMS.Models.Notification
});
MMS.Models.AlertConfig = Backbone.Model.extend({
    defaults: {
        _t: null,
        et: null,
        cid: null,
        enabled: !1,
        mt: void 0,
        matchers: [],
        notify: []
    },
    parse: function (a, b) {
        a.mt && (a.mt = new MMS.Models.MetricThreshold(a.mt));
        a.matchers = new MMS.Collections.Matchers(a.matchers);
        a.notify = new MMS.Collections.Notifications(a.notify);
        return a
    },
    toJSON: function (a) {
        a = _.clone(this.attributes);
        a.mt && (a.mt = a.mt.toJSON());
        a.matchers = a.matchers.map(function (a) {
            return a.toJSON()
        });
        a.notify = a.notify.map(function (a) {
            return a.toJSON()
        });
        return a
    },
    clone: function (a) {
        a = Backbone.Model.prototype.clone.call(this);
        a.get("mt") && a.set("mt", a.get("mt").clone());
        a.get("matchers") && a.set("matchers", a.get("matchers").clone());
        a.get("notify") && a.set("notify", a.get("notify").clone());
        return a
    },
    onValidate: function (a, b) {
        var e = this.get("et");
        a.notNull("et", e, b);
        this.isMetricAlert() && (e = this.get("mt"), a.notNull("mt", e, b), a.valid("mt", e, b));
        a.validCollection("matchers", this.get("matchers"), b);
        a.sizeBounds("notify", this.get("notify"), {
            min: 1
        }, b);
        a.validCollection("notify",
            this.get("notify"), b)
    },
    getNormalizedType: function () {
        var a = this.get("_t");
        return "HOST_METRIC" === a ? "HOST" : a
    },
    hasMatcherSupport: function () {
        return "HOST" === this.getNormalizedType()
    },
    isMetricAlert: function () {
        return "HOST_METRIC" === this.get("_t")
    },
    setCurrentType: function (a) {
        var b = this.get("_t");
        this.set("_t", a);
        "HOST_METRIC" === b && (b = "HOST");
        "HOST_METRIC" === a && (a = "HOST");
        b !== a && (this.trigger("alertConfig.typeChanged"), this.setCurrentHostType("ANY"))
    },
    getHostTypeMatcher: function () {
        return this.get("matchers").find(function (a) {
            return a.isHostTypeMatcher()
        })
    },
    getEditableMatchers: function () {
        var a = this.get("matchers");
        return a = a.filter(function (a) {
            return !a.isHostTypeMatcher()
        })
    },
    getCurrentHostType: function () {
        var a = this.getHostTypeMatcher();
        return a ? a.get("value") : "ANY"
    },
    setCurrentHostType: function (a) {
        function b() {
            var a = c.getHostTypeMatcher();
            void 0 !== a && a.destroy()
        }

        function e() {
            var b = c.getHostTypeMatcher();
            void 0 === b ? (b = new MMS.Models.Matcher({
                field: "typeIds",
                op: "CONTAINS",
                value: a
            }), c.get("matchers").add(b)) : b.set("value", a)
        }
        var c = this;
        "ANY" === a ? b() : e();
        this.set("et", null);
        this.setCurrentMetric(void 0);
        this.trigger("alertConfig.hostTypeChanged", a)
    },
    getCurrentMetricField: function (a) {
        var b = this.get("mt");
        if (b) return b.get(a)
    },
    setCurrentMetric: function (a) {
        if (a) {
            var b = this.get("mt");
            b ? b.set("metric", a) : this.set("mt", new MMS.Models.MetricThreshold({
                metric: a
            }))
        } else this.unset("mt")
    }
});
_.extend(MMS.Models.AlertConfig.prototype, MMS.Models.ValidationMixin);
MMS.Collections.AlertConfigs = Backbone.Collection.extend({
    model: MMS.Models.AlertConfig,
    url: function () {
        return "/activity/alertConfigs/" + MMS.Globals.GROUP_ID
    }
});
MMS.Decorators.Alert = function (a) {
    this.model = a;
    this.isOpen = function () {
        var a = this.model.get("status");
        if (a) return "OPEN" === a
    };
    this.isAcknowledged = function () {
        var a = this.model.get("ackUntil");
        return a ? a >= (new Date).getTime() : !1
    };
    this.decorate = function () {
        var a = (new MMS.Decorators.Event(this.model)).decorate();
        return _.extend(a, {
            isOpen: this.isOpen(),
            isAcknowledged: this.isAcknowledged()
        })
    }
};
MMS.Models.Alert = Backbone.Model.extend({
    defaults: {
        _t: null,
        cid: null,
        acids: null,
        teid: null,
        reid: null,
        et: null,
        ackUntil: null,
        cre: null,
        upd: null,
        res: null,
        ln: null,
        lnd: null,
        status: null,
        mt: void 0,
        cv: void 0,
        hid: void 0,
        hp: void 0,
        ver: void 0,
        rsId: void 0,
        clusterName: void 0,
        st: void 0
    },
    parse: function (a, b) {
        a.mt && (a.mt = new MMS.Models.MetricThreshold(a.mt));
        return a
    },
    toJSON: function (a) {
        a = _.clone(this.attributes);
        a.mt && (a.mt = a.mt.toJSON());
        return a
    }
});
MMS.Collections.Alerts = Backbone.Collection.extend({
    model: MMS.Models.Alert,
    setMode: function (a) {
        this.mode = a
    },
    url: function () {
        return "/activity/alerts/" + this.mode + "/" + MMS.Globals.GROUP_ID + "/" + this.paginationCurrentOffset + "/" + this.paginationPageSize + "/" + this.paginationStartTimestamp
    }
});
_.extend(MMS.Collections.Alerts.prototype, MMS.Collections.PaginationMixin);
MMS.Decorators.Event = function (a) {
    this.model = a;
    this.isForHost = function () {
        var a = this.model.get("_t");
        return "HOST" === a || "HOST_METRIC" === a || "HOST_AUDIT" === a
    };
    this.isElectionEvent = function () {
        return "PRIMARY_ELECTED" === this.model.get("et")
    };
    this.getMetric = function () {
        var a = this.model.get("mt");
        if (a) return MMS.i18n.Activity.MetricNames[a.get("metric")]
    };
    this.getTargetLink = function () {
        var a = this.model.get("_t"),
            e = this.model.get("et");
        if ("AGENT" === a) return "BACKUP_AGENT_DOWN" === e ? "/backup/dashboard/" + MMS.Globals.GROUP_ID +
                "#agents" : "/host/list/" + MMS.Globals.GROUP_ID + "#agentsTab";
        if ("HOST" === a || "HOST_METRIC" === a) return "/host/detail/" + MMS.Globals.GROUP_ID + "/" + this.model.get("hid");
        if ("BACKUP" === a) return "/backup/dashboard/" + MMS.Globals.GROUP_ID + "#status";
        if ("REPLICA_SET" === a) return "/host/chartReplSetHosts/" + MMS.Globals.GROUP_ID + "/" + this.model.get("clusterId");
        if ("HOST_AUDIT" === a && "DELETE_HOST_AUDIT" !== e && "UNDELETE_HOST_AUDIT" !== e) return "/host/detail/" + MMS.Globals.GROUP_ID + "/" + this.model.get("hid")
    };
    this.getTargetName = function () {
        var a = this.model.get("_t"),
            e = this.model.get("et");
        if ("AGENT" === a) return "BACKUP_AGENT_DOWN" === e || "BACKUP_AGENT_UP" === e ? "Backup Agent" : "Monitoring Agent";
        if ("HOST" === a || "HOST_METRIC" === a || "HOST_AUDIT" === a) return this.model.get("hp");
        if ("BACKUP" === a) return this.getBackupEventTarget();
        if ("REPLICA_SET" === a) return this.model.get("rsId")
    };
    this.getMemberLink = function () {
        return "/host/detail/" + MMS.Globals.GROUP_ID + "/" + this.model.get("hid")
    };
    this.getMemberName = function () {
        return this.model.get("hp")
    };
    this.getBackupEventTarget = function () {
        var a = this.model.get("rsId"),
            e = this.model.get("clusterName"),
            c = this.model.get("st");
        target = "Backup for ";
        "REPLICA_SET" === c ? target += "Replica Set: " : "CONFIG_SERVER" === c && (target += "Config Server: ");
        target += a;
        e && (target += " in " + e);
        return target
    };
    this.isOpen = function () {
        return "OUTSIDE_METRIC_THRESHOLD" === this.model.get("et")
    };
    this.getMode = function () {
        var a = this.model.get("mt");
        if (a) return MMS.i18n.Activity.MetricModes[a.get("mode")]
    };
    this.getDescription = function () {
        var b =
            this.model.get("mt");
        return b ? (this.isOpen() ? "has gone " : "is no longer ") + ("GREATER_THAN" === b.get("op") ? "above " : "below ") + " " + b.get("threshold") + " " + MMS.i18n.Activity.MetricUnits[b.get("units")] : MMS.i18n.Activity.EventTypeDescription[a.get("et")]
    };
    this.decorate = function () {
        return {
            _t: MMS.i18n.Activity.Types[this.model.get("_t")],
            icon: MMS.i18n.Activity.EventIcons[a.get("et")],
            metric: this.getMetric(),
            targetLink: this.getTargetLink(),
            targetName: this.getTargetName(),
            memberLink: this.getMemberLink(),
            memberName: this.getMemberName(),
            description: this.getDescription(),
            mode: this.getMode(),
            isOpen: this.isOpen(),
            isForHost: this.isForHost(),
            isElectionEvent: this.isElectionEvent()
        }
    }
};
MMS.Models.Event = Backbone.Model.extend({
    defaults: {
        _t: null,
        cid: null,
        cre: null,
        et: null,
        hid: void 0,
        hp: void 0,
        ver: void 0,
        rsId: void 0,
        clusterName: void 0,
        shardName: void 0,
        mt: void 0,
        cv: void 0,
        un: void 0,
        remoteAddr: void 0,
        userId: void 0,
        ipAddress: void 0,
        source: void 0,
        configState: void 0,
        snapshotId: void 0,
        restoreJobId: void 0,
        clustershotId: void 0,
        syncSource: void 0,
        pointInTime: void 0,
        clusterId: void 0
    },
    parse: function (a, b) {
        a.mt && (a.mt = new MMS.Models.MetricThreshold(a.mt));
        return a
    },
    toJSON: function (a) {
        a = _.clone(this.attributes);
        a.mt && (a.mt = a.mt.toJSON());
        return a
    }
});
MMS.Collections.Events = Backbone.Collection.extend({
    model: MMS.Models.Event,
    url: function () {
        return "/activity/events/" + MMS.Globals.GROUP_ID + "/" + this.paginationCurrentOffset + "/" + this.paginationPageSize + "/" + this.paginationStartTimestamp
    }
});
_.extend(MMS.Collections.Events.prototype, MMS.Collections.PaginationMixin);
MMS.Views.InfiniteScrollMixin = {
    initInfiniteScroll: function (a) {
        this.loader = $(a);
        this.bindScrollEvent()
    },
    getFetchMorePagesFunction: function () {
        var a = this;
        return _.debounce(function () {
            var b;
            a.collection.hasMorePages() ? (a.loader.show(), b = a.collection.fetchPage({
                silent: !0,
                remove: !1,
                merge: !1
            }), b.done(function () {
                a.loader.hide()
            })) : (a.loader.hide(), a.unbindScrollEvent())
        }, 500, !0)
    },
    bindScrollEvent: function () {
        var a = this.getFetchMorePagesFunction(),
            b = $(window);
        b.on("scroll.infinite", function (e) {
            e = b.scrollTop() +
                b.height();
            var c = $(document).height();
            250 >= Math.abs(c - e) && a()
        })
    },
    unbindScrollEvent: function () {
        $(window).off("scroll.infinite")
    }
};
MMS.Views.AlertItemView = Backbone.Marionette.ItemView.extend({
    tagName: "li",
    className: "event clearfix",
    getTemplate: function () {
        return this.model.get("mt") ? Handlebars.templates["activity/alert/metric_alert.hbs"] : Handlebars.templates["activity/alert/alert.hbs"]
    },
    templateHelpers: function () {
        return (new MMS.Decorators.Alert(this.model)).decorate()
    },
    events: {
        "click .alert-acknowledge": "acknowledgeAlert",
        "click .alert-unacknowledge": "unacknowledgeAlert"
    },
    modelEvents: {
        "change:ackUntil": "render"
    },
    acknowledgeAlert: function (a) {
        a.preventDefault();
        var b = this,
            e = $(a.target),
            c = e.data("until");
        (new MMS.Views.ConfirmationDialog({
            windowTitle: "Confirm Acknowledge",
            okButtonText: "Acknowledge",
            ok: function () {
                e.closest(".btn-group").find(".btn").addClass("disabled");
                $.postJSON("/activity/acknowledgeAlert/" + MMS.Globals.GROUP_ID, {
                    id: b.model.get("id"),
                    until: c
                }, function (a) {
                    b.model.set("ackUntil", a.ackUntil);
                    $("#new-alert-notification").open_alerts_widget("refresh")
                })
            }
        })).render()
    },
    unacknowledgeAlert: function (a) {
        a.preventDefault();
        var b = this;
        $(a.target);
        (new MMS.Views.ConfirmationDialog({
            windowTitle: "Confirm Unacknowledge",
            okButtonText: "Unacknowledge",
            ok: function () {
                $.postJSON("/activity/unacknowledgeAlert/" + MMS.Globals.GROUP_ID, {
                    id: b.model.get("id")
                }, function (a) {
                    b.model.set("ackUntil", null);
                    $("#new-alert-notification").open_alerts_widget("refresh")
                })
            }
        })).render()
    }
});
MMS.Views.AlertEmptyView = Backbone.View.extend({
    tagName: "div",
    className: "well text-center",
    render: function () {
        this.$el.html("<em>No Alerts</em>");
        return this
    }
});
MMS.Views.AlertCollectionView = Backbone.Marionette.CollectionView.extend({
    itemView: MMS.Views.AlertItemView,
    emptyView: MMS.Views.AlertEmptyView,
    tagName: "ul",
    className: "list-unstyled activity-feed open-alerts jshide",
    collectionEvents: {
        sync: "onSync"
    },
    onSync: function (a) {
        a instanceof Backbone.Collection && (this.render(), this.$el.show(), 0 < a.length && $("#openAlertSection").show())
    }
});
_.extend(MMS.Views.AlertCollectionView.prototype, MMS.Views.InfiniteScrollMixin);
MMS.Views.AlertConfigStepErrorTooltipMixin = {
    currentCallback: null,
    clearHideCallback: function () {
        this.currentCallback && (clearTimeout(this.currentCallback), this.currentCallback = null)
    },
    showErrorTooltip: function (a) {
        var b = this.$(".step-info").attr("title", a).tooltip({
            placement: "right",
            trigger: "manual"
        });
        this.clearHideCallback();
        b.tooltip("show");
        this.currentCallback = setTimeout(function () {
            b.tooltip("hide")
        }, 5E3)
    },
    removeErrorTooltip: function () {
        this.clearHideCallback();
        this.$(".step-info").tooltip("destroy")
    }
};
MMS.Views.AlertConfigStep1View = Backbone.Marionette.ItemView.extend({
    tagName: "div",
    className: "alert-config step-1 clearfix",
    template: Handlebars.templates["activity/alertConfig/alert_config_step1.hbs"],
    events: {
        shown: "onModalShown"
    },
    modelEvents: {
        "alertConfig.typeChanged": "typeChanged",
        "alertConfig.hostTypeChanged": "hostTypeChanged"
    },
    initialize: function () {
        this.typeSelectionView = new MMS.Views.TypeSelectionView({
            model: this.model
        });
        this.hostTypeSelectionView = new MMS.Views.HostTypeSelectionView({
            model: this.model
        });
        this.eventTypeSelectionView = new MMS.Views.EventTypeSelectionView({
            model: this.model,
            metrics: this.options.metrics
        })
    },
    onRender: function () {
        this.$el.append(this.typeSelectionView.render().el);
        this.$el.append(this.hostTypeSelectionView.render().el);
        this.$el.append(this.eventTypeSelectionView.render().el)
    },
    onClose: function () {
        this.typeSelectionView.close();
        this.hostTypeSelectionView.close();
        this.eventTypeSelectionView.close()
    },
    onModalShown: function () {
        this.eventTypeSelectionView.snapBackScroll();
        this.eventTypeSelectionView.showCustomMetricInput()
    },
    showErrors: function (a) {
        a && (a.et || a.mt) ? (this.$el.addClass("validation-error"), this.showErrorTooltip("The specified alert trigger is invalid")) : (this.removeErrorTooltip(), this.$el.removeClass("validation-error"));
        this.eventTypeSelectionView.showErrors()
    },
    typeChanged: function () {
        this.hostTypeSelectionView.render();
        this.eventTypeSelectionView.render()
    },
    hostTypeChanged: function (a) {
        this.eventTypeSelectionView.render()
    }
});
_.extend(MMS.Views.AlertConfigStep1View.prototype, MMS.Views.AlertConfigStepErrorTooltipMixin);
MMS.Views.AlertConfigStep2View = Backbone.Marionette.Layout.extend({
    tagName: "div",
    className: "alert-config step-2 clearfix",
    template: Handlebars.templates["activity/alertConfig/alert_config_step2.hbs"],
    modelEvents: {
        "alertConfig.typeChanged": "typeChanged",
        "alertConfig.hostTypeChanged": "hostTypeChanged"
    },
    regions: {
        matcherSelector: "#matcherSelector",
        matcherCollection: "#matcherCollection",
        filterResults: "#filterResults"
    },
    initialize: function (a) {
        a = this.model.get("matchers");
        this.matcherSelectorView = new MMS.Views.MatcherSelectorView({
            model: this.model
        });
        this.matcherCollectionView = new MMS.Views.MatcherCollectionView({
            collection: a
        })
    },
    onRender: function () {
        this.matcherSelector.show(this.matcherSelectorView);
        this.matcherCollection.show(this.matcherCollectionView);
        this.adjustOpacity()
    },
    showErrors: function (a) {
        a && a.matchers ? (this.$el.addClass("validation-error"), this.showErrorTooltip("One or more of the matchers was invalid")) : (this.removeErrorTooltip(), this.$el.removeClass("validation-error"));
        this.matcherCollectionView.showErrors()
    },
    adjustOpacity: function () {
        this.model.hasMatcherSupport() ?
            this.$el.css("opacity", 1) : this.$el.css("opacity", 0.5)
    },
    typeChanged: function () {
        this.model.get("matchers").reset();
        this.matcherSelectorView.render();
        this.adjustOpacity()
    },
    hostTypeChanged: function () {
        this.matcherSelectorView.render()
    }
});
_.extend(MMS.Views.AlertConfigStep2View.prototype, MMS.Views.AlertConfigStepErrorTooltipMixin);
MMS.Views.AlertConfigStep3View = Backbone.Marionette.ItemView.extend({
    tagName: "div",
    className: "alert-config step-3 clearfix",
    template: Handlebars.templates["activity/alertConfig/alert_config_step3.hbs"],
    templateHelpers: function () {
        return {
            onPrem: MMS.Globals.ON_PREM
        }
    },
    events: {
        "click .add-alert-notification": "addNotification"
    },
    initialize: function (a) {
        this.notificationCollectionView = new MMS.Views.NotificationCollectionView({
            collection: this.model.get("notify"),
            itemViewOptions: {
                groupTooltip: this.getGroupTooltip(this.options.users),
                userAutocompleteSource: this.getUserAutocompleteSource(this.options.users)
            }
        })
    },
    onRender: function () {
        this.$("#alert-notifications").html(this.notificationCollectionView.render().el)
    },
    onClose: function () {
        this.notificationCollectionView.close()
    },
    getGroupTooltip: function (a) {
        return Handlebars.templates["activity/alertConfig/group_tooltip.hbs"]({
            users: a
        })
    },
    getUserAutocompleteSource: function (a) {
        return _.map(a, function (a) {
            var e = [a.fn, a.ln].join(" ");
            return {
                label: a.un + " (" + e + ")",
                value: a.un
            }
        })
    },
    showErrors: function (a) {
        a &&
            a.notify ? (this.$el.addClass("validation-error"), this.showErrorTooltip("One or more of the notifications was invalid")) : (this.removeErrorTooltip(), this.$el.removeClass("validation-error"));
        this.notificationCollectionView.showErrors()
    },
    addNotification: function (a) {
        a.preventDefault();
        a = $(a.target).data("type");
        var b = new MMS.Models.Notification({
            _t: a
        });
        "GROUP" === a && b.set({
            cid: MMS.Globals.GROUP_ID,
            gn: MMS.Globals.GROUP_NAME,
            email: !0
        });
        "USER" === a && b.set({
            email: !0
        });
        this.model.get("notify").add(b)
    }
});
_.extend(MMS.Views.AlertConfigStep3View.prototype, MMS.Views.AlertConfigStepErrorTooltipMixin);
MMS.Views.AlertConfigItemView = Backbone.Marionette.ItemView.extend({
    tagName: "li",
    className: "alert-object clearfix",
    template: Handlebars.templates["activity/alertConfig/alert_config_display.hbs"],
    templateHelpers: function () {
        return (new MMS.Decorators.AlertConfig(this.model)).decorate()
    },
    events: {
        "click .alert-edit-link": "editAlert",
        "click .alert-clone-link": "cloneAlert",
        "click .alert-delete-link": "deleteAlert",
        "click .alert-enable-link": "enableAlert",
        "click .alert-disable-link": "disableAlert"
    },
    modelEvents: {
        sync: "onSync"
    },
    onRender: function () {
        this.model.get("enabled") ? this.$el.hasClass("disabled") && this.$el.removeClass("disabled") : this.$el.hasClass("disabled") || this.$el.addClass("disabled");
        this.model.isNew() && this.$el.hide()
    },
    onSync: function (a, b, e) {
        a instanceof Backbone.Model && (this.render(), e.skipHighlight || this.animateHighlight(this.$el.is(":visible")))
    },
    animateHighlight: function (a) {
        if ($.support.transition && $.support.transition.end) {
            var b = this;
            a ? (this.$el.one($.support.transition.end, function (a) {
                b.$el.hasClass("highlight") &&
                    b.$el.removeClass("highlight")
            }), _.defer(function () {
                b.$el.hasClass("highlight") || b.$el.addClass("highlight")
            })) : (this.$el.hasClass("highlight") || this.$el.addClass("highlight"), this.$el.show(0, function () {
                b.$el.hasClass("highlight") && b.$el.removeClass("highlight")
            }))
        } else a || this.$el.show()
    },
    editAlert: function () {
        this.model.trigger("alertConfig:editSelected", this.model)
    },
    cloneAlert: function () {
        this.model.trigger("alertConfig:cloneSelected", this.model)
    },
    deleteAlert: function () {
        var a = this;
        (new MMS.Views.ConfirmationDialog({
            windowTitle: "Confirm Delete",
            okButtonText: "Delete",
            ok: function () {
                a.model.destroy()
            }
        })).render()
    },
    enableAlert: function () {
        this.model.save({
            enabled: !0
        }, {
            wait: !0
        }).fail(function () {
            alert("Failed to save alertConfig!")
        })
    },
    disableAlert: function () {
        this.model.save({
            enabled: !1
        }, {
            wait: !0
        }).fail(function () {
            alert("Failed to save alertConfig!")
        })
    }
});
MMS.Views.AlertConfigEditView = Backbone.Marionette.Layout.extend({
    id: "editAlertModal",
    className: "modal",
    attributes: {
        tabindex: "-1"
    },
    template: Handlebars.templates["activity/alertConfig/alert_config_edit.hbs"],
    events: {
        "click #saveAlert": "saveAlert",
        "shown.bs.modal": "onModalShown",
        "hidden.bs.modal": "onModalHidden"
    },
    modelEvents: {
        invalid: "onValidationError"
    },
    regions: {
        step1: "#alertStep1",
        step2: "#alertStep2",
        step3: "#alertStep3"
    },
    initialize: function () {
        this.step1View = new MMS.Views.AlertConfigStep1View({
            model: this.model,
            metrics: this.options.metrics
        });
        this.step2View = new MMS.Views.AlertConfigStep2View({
            model: this.model
        });
        this.step3View = new MMS.Views.AlertConfigStep3View({
            model: this.model,
            users: this.options.users
        })
    },
    onRender: function () {
        this.step1.show(this.step1View);
        this.step2.show(this.step2View);
        this.step3.show(this.step3View)
    },
    onModalShown: function (a) {
        a.target === this.el && this.step1View.$el.trigger("shown")
    },
    onModalHidden: function (a) {
        a.target === this.el && (this.model.isNew() ? this.model.destroy() : this.model.fetch({
            skipHighlight: !0
        }),
            this.close())
    },
    saveAlert: function () {
        var a = this,
            b = a.model.save({}, {
                wait: !0
            });
        b && (b.done(function () {
            a.$el.modal("hide")
        }), b.fail(function (b, c, d) {
            a.showErrors(MMS.i18n.httpErrorMsg(b.status), b.responseJSON)
        }))
    },
    onValidationError: function (a, b) {
        this.showErrors(MMS.i18n.invalidInputErrorMsg, b)
    },
    showErrors: function (a, b) {
        a && (this.$(".alert-danger-msg").text(a), this.$(".alert-danger").show());
        this.step1View.showErrors(b);
        this.step2View.showErrors(b);
        this.step3View.showErrors(b)
    }
});
MMS.Views.AlertConfigEmptyView = Backbone.View.extend({
    tagName: "div",
    className: "well",
    render: function () {
        this.$el.html("No Alerts Configured");
        return this
    }
});
MMS.Views.AlertConfigCollectionView = Backbone.Marionette.CollectionView.extend({
    itemView: MMS.Views.AlertConfigItemView,
    emptyView: MMS.Views.AlertConfigEmptyView,
    tagName: "ul",
    className: "alert-list list-unstyled jshide",
    collectionEvents: {
        sync: "onSync",
        "alertConfig:editSelected": "showEditDialog",
        "alertConfig:cloneSelected": "cloneModel"
    },
    onSync: function (a) {
        a instanceof Backbone.Collection && (this.render(), this.$el.show())
    },
    showEditDialog: function (a) {
        var b = new MMS.Views.AlertConfigEditView({
            model: a,
            metrics: this.options.metrics,
            users: this.options.users
        });
        this.collection.add(a);
        b.render().$el.modal({
            show: !0
        })
    },
    cloneModel: function (a) {
        a = a.clone();
        a.unset("id");
        this.showEditDialog(a)
    },
    appendHtml: function (a, b, e) {
        a.$el.prepend(b.el)
    }
});
MMS.Views.FilterResultsView = Backbone.View.extend({
    tagName: "div",
    template: Handlebars.templates["activity/alertConfig/filter_results.hbs"],
    render: function () {
        this.$el.html(this.template());
        return this
    }
});
MMS.Views.MatcherSelectorView = Backbone.Marionette.ItemView.extend({
    tagName: "span",
    template: Handlebars.templates["activity/alertConfig/matcher_selector.hbs"],
    templateHelpers: function () {
        return (new MMS.Decorators.AlertConfig(this.model)).decorate()
    },
    events: {
        'change input[name="matcherMode"]': "matcherModeChanged"
    },
    initialize: function () {
        var a = this.model.get("matchers");
        this.listenTo(a, "remove", this.updateMatcherModeRadioButton)
    },
    onRender: function () {
        this.updateMatcherModeRadioButton()
    },
    updateMatcherModeRadioButton: function () {
        0 <
            this.model.getEditableMatchers().length ? this.$('input[name="matcherMode"][value="specific"]').prop("checked", !0) : this.$('input[name="matcherMode"][value="any"]').prop("checked", !0);
        this.model.hasMatcherSupport() ? this.$('input[name="matcherMode"]').removeAttr("disabled") : this.$('input[name="matcherMode"]').attr("disabled", !0)
    },
    matcherModeChanged: function (a) {
        "any" === this.$('input[name="matcherMode"]:checked').val() ? this.destroyEditableMatchers() : this.ensureAtLeastOneMatcher()
    },
    ensureAtLeastOneMatcher: function () {
        0 ===
            this.model.getEditableMatchers().length && this.model.get("matchers").add(new MMS.Models.Matcher({}))
    },
    destroyEditableMatchers: function () {
        _.each(this.model.getEditableMatchers(), function (a) {
            a.destroy()
        })
    }
});
MMS.Views.MatcherItemView = Backbone.Marionette.ItemView.extend({
    tagName: "li",
    className: function () {
        return this.model.isHostTypeMatcher() ? "jshide" : ""
    },
    template: Handlebars.templates["activity/alertConfig/matcher.hbs"],
    templateHelpers: function () {
        var a = this;
        return {
            fields: _.map(this.fields, function (b) {
                b.name = MMS.i18n.Activity.HostFields[b.value];
                b.selected = b.value === a.model.get("field");
                return b
            }),
            ops: _.map(this.ops, function (b) {
                b.name = MMS.i18n.Activity.MatcherOperations[b.value];
                b.selected = b.value === a.model.get("op");
                return b
            })
        }
    },
    events: function () {
        return {
            "click .remove-target-matcher": "removeRow",
            "change .matcher-field": this.updateModelWithVal("field"),
            "change .matcher-op": this.updateModelWithVal("op"),
            "blur .matcher-value": "updateValue"
        }
    },
    ui: {
        field: ".matcher-field",
        op: ".matcher-op",
        value: ".matcher-value"
    },
    fields: [{
            value: "hostname"
        }, {
            value: "port"
        }, {
            value: "hostnameAndPort"
        }, {
            value: "replicaSetId"
        }],
    ops: [{
            value: "EQUALS"
        }, {
            value: "NOT_EQUALS"
        }, {
            value: "CONTAINS"
        }, {
            value: "NOT_CONTAINS"
        }, {
            value: "STARTS_WITH"
        }, {
            value: "ENDS_WITH"
        },
        {
            value: "REGEX"
        }],
    updateValue: function (a) {
        $(a.target);
        this.model.set("field", this.ui.field.val());
        this.model.set("op", this.ui.op.val());
        this.model.set("value", this.ui.value.val())
    },
    removeRow: function (a) {
        a.preventDefault();
        this.model.destroy()
    },
    showErrors: function () {
        var a = this.model.validationError;
        this.$(".matcher-value").removeClass("validation-error");
        a && a.value && this.$(".matcher-value").addClass("validation-error")
    }
});
_.extend(MMS.Views.MatcherItemView.prototype, MMS.Views.FormFieldBindingMixin);
MMS.Views.MatcherCollectionView = Backbone.Marionette.CollectionView.extend({
    itemView: MMS.Views.MatcherItemView,
    tagName: "ul",
    className: "host-filters",
    events: {
        "click .add-target-matcher": "addRow"
    },
    addRow: function (a) {
        a.preventDefault();
        this.collection.add(new MMS.Models.Matcher({}))
    },
    showErrors: function () {
        this.children.each(function (a) {
            a.showErrors()
        })
    }
});
MMS.Views.NotificationItemView = Backbone.Marionette.ItemView.extend({
    tagName: "li",
    className: "clearfix",
    getTemplate: function () {
        return "EMAIL" == this.model.get("_t") ? Handlebars.templates["activity/alertConfig/notification_email.hbs"] : "SMS" == this.model.get("_t") ? Handlebars.templates["activity/alertConfig/notification_sms.hbs"] : "SNMP" == this.model.get("_t") ? Handlebars.templates["activity/alertConfig/notification_snmp.hbs"] : "USER" == this.model.get("_t") ? Handlebars.templates["activity/alertConfig/notification_user.hbs"] :
            "HIP_CHAT" == this.model.get("_t") ? Handlebars.templates["activity/alertConfig/notification_hipchat.hbs"] : Handlebars.templates["activity/alertConfig/notification_group.hbs"]
    },
    templateHelpers: function () {
        return (new MMS.Decorators.Notification(this.model)).decorate()
    },
    events: function () {
        return {
            "click .remove-recipient": "removeRow",
            "blur .notification-cid": this.updateModelWithVal("cid"),
            "blur .notification-un": this.updateModelWithVal("un"),
            "blur .notification-emailAddress": this.updateModelWithVal("emailAddress"),
            "blur .notification-mobileNumber": this.updateModelWithVal("mobileNumber"),
            "blur .notification-roomName": this.updateModelWithVal("roomName"),
            "blur .notification-notificationToken": this.updateModelWithVal("notificationToken"),
            "blur .notification-snmpAddress": this.updateModelWithVal("snmpAddress"),
            "change .notification-email": this.updateModelWithChecked("email"),
            "change .notification-sms": this.updateModelWithChecked("sms"),
            "blur .notification-interval": this.updateModelWithIntegerVal("interval"),
            "blur .notification-delay": this.updateModelWithIntegerVal("delay")
        }
    },
    onRender: function () {
        this.$(".group-notification-tooltip").attr("title", this.options.groupTooltip).tooltip({
            html: !0
        });
        this.$(".notification-un").autocomplete({
            source: this.options.userAutocompleteSource
        })
    },
    removeRow: function (a) {
        a.preventDefault();
        this.model.destroy()
    },
    showErrors: function () {
        var a = this.model.validationError;
        this.$(".notification-un").removeClass("validation-error");
        this.$(".notification-emailAddress").removeClass("validation-error");
        this.$(".notification-mobileNumber").removeClass("validation-error");
        this.$(".notification-snmpAddress").removeClass("validation-error");
        this.$(".notification-interval").removeClass("validation-error");
        this.$(".notification-delay").removeClass("validation-error");
        this.$(".notification-email").removeClass("validation-error");
        this.$(".notification-sms").removeClass("validation-error");
        this.$(".notification-roomName").removeClass("validation-error");
        this.$(".notification-notificationToken").removeClass("validation-error");
        a && (a.un && this.$(".notification-un").addClass("validation-error"),
            a.emailAddress && this.$(".notification-emailAddress").addClass("validation-error"), a.mobileNumber && this.$(".notification-mobileNumber").addClass("validation-error"), a.snmpAddress && this.$(".notification-snmpAddress").addClass("validation-error"), a.interval && this.$(".notification-interval").addClass("validation-error"), a.delay && this.$(".notification-delay").addClass("validation-error"), a.email && this.$(".notification-email").addClass("validation-error"), a.sms && this.$(".notification-sms").addClass("validation-error"),
            a.roomName && this.$(".notification-roomName").addClass("validation-error"), a.notificationToken && this.$(".notification-notificationToken").addClass("validation-error"))
    }
});
_.extend(MMS.Views.NotificationItemView.prototype, MMS.Views.FormFieldBindingMixin);
MMS.Views.NotificationCollectionView = Backbone.Marionette.CollectionView.extend({
    itemView: MMS.Views.NotificationItemView,
    tagName: "li",
    className: "add-alert-recipients",
    showErrors: function () {
        this.children.each(function (a) {
            a.showErrors()
        })
    }
});
MMS.Views.BaseSelectionMenuView = Backbone.View.extend({
    tagName: "ul",
    attributes: {
        tabindex: "0"
    },
    events: {
        "click .scroll-pane > li > a": "updateSelection",
        keydown: "onKeyDown",
        focus: "onFocus"
    },
    initialize: function (a) {
        this.options = a
    },
    render: function () {
        this.$el.html(this.template({
            items: this.getFilteredMenuItems()
        }));
        if (_.isFunction(this.onRender)) this.onRender();
        this.$el.find(".alert-menu-label i").tooltip();
        return this
    },
    close: function () {
        this.remove()
    },
    getFilteredMenuItems: function () {
        var a = _.clone(this.menuOptions.items);
        return this.filterMenuItems(a)
    },
    setLinkTargetActive: function (a) {
        this.$el.find("li").removeClass("active");
        a.parent().addClass("active");
        a.closest(".column-menu").focus()
    },
    onFocus: function (a) {
        a.preventDefault();
        this.$el.parent().find(".column-menu").not(":focus").removeClass("active");
        this.$el.addClass("active");
        0 === this.$el.find("li.active").length && this.$el.find("li:first a:first").click()
    },
    onKeyDown: function (a) {
        document.activeElement === this.el && (37 === a.keyCode ? (a.preventDefault(), this.clickPreviousColumn()) :
            38 === a.keyCode ? (a.preventDefault(), this.clickPrevious(), this.snapBackScroll()) : 39 === a.keyCode ? (a.preventDefault(), this.clickNextColumn()) : 40 === a.keyCode && (a.preventDefault(), this.clickNext(), this.snapBackScroll()))
    },
    clickPreviousColumn: function () {
        this.$el.closest(".column-menu").prevAll(":visible:first").focus()
    },
    clickNextColumn: function () {
        this.$el.closest(".column-menu").nextAll(":visible:first").focus()
    },
    clickPrevious: function () {
        this.$el.find("li.active").prev().find("a:first").click()
    },
    clickNext: function () {
        this.$el.find("li.active").next().find("a:first").click()
    },
    snapBackScroll: function () {
        var a = this.$el.find(".scroll-pane"),
            b = this.$el.find("li.active"),
            e = b.position(),
            c = a.scrollTop(),
            b = a.height() - b.height() - 1;
        e && (0 > e.top ? (c = e.top + c - b / 2, a.animate({
            scrollTop: c
        }, 100)) : e.top > b && (e = e.top - b, a.animate({
            scrollTop: e + c + b / 2
        }, 100)))
    }
});
MMS.Views.TypeSelectionView = MMS.Views.BaseSelectionMenuView.extend({
    className: "column-menu pull-left",
    template: Handlebars.templates["activity/alertConfig/selection_menu_type.hbs"],
    menuOptions: {
        items: [{
                value: "HOST"
            }, {
                value: "AGENT"
            }, {
                value: "BACKUP"
            }]
    },
    filterMenuItems: function (a) {
        var b = this,
            e = this.model.get("_t");
        return _.map(a, function (a) {
            var d = "HOST" === b.model.getNormalizedType() ? "HOST" : e;
            a.name = MMS.i18n.Activity.Types[a.value];
            a.active = d === a.value;
            return a
        })
    },
    updateSelection: function (a) {
        a.preventDefault();
        a = $(a.target).closest("a");
        var b = a.data("value");
        this.setLinkTargetActive(a);
        this.model.setCurrentType(b)
    }
});
MMS.Views.HostTypeSelectionView = MMS.Views.BaseSelectionMenuView.extend({
    className: "column-menu pull-left jshide",
    template: Handlebars.templates["activity/alertConfig/selection_menu_host_type.hbs"],
    menuOptions: {
        items: [{
                value: "ANY"
            }, {
                value: "1"
            }, {
                value: "7"
            }, {
                value: "8"
            }, {
                value: "2"
            }, {
                value: "3"
            }]
    },
    onRender: function () {
        "HOST" === this.model.getNormalizedType() ? this.$el.show() : this.$el.hide()
    },
    filterMenuItems: function (a) {
        this.model.get("_t");
        var b = this.model.getCurrentHostType();
        return _.map(a, function (a) {
            a.name =
                MMS.i18n.Activity.OfHostTypes[a.value];
            a.active = b === a.value;
            return a
        })
    },
    updateSelection: function (a) {
        a.preventDefault();
        a = $(a.target).closest("a");
        var b = a.data("value");
        this.model.setCurrentHostType(b);
        this.setLinkTargetActive(a)
    }
});
MMS.Views.EventTypeSelectionView = MMS.Views.BaseSelectionMenuView.extend({
    className: "column-menu wide-menu pull-left",
    template: Handlebars.templates["activity/alertConfig/selection_menu_event_type.hbs"],
    events: {
        "click .scroll-pane > li > a": "updateSelection",
        keydown: "onKeyDown",
        focus: "onFocus",
        "blur .custom-metric-input input": "updateValue",
        "selected .dropdown": "dropdownSelection",
        "scroll .scroll-pane": "handleScroll",
        "click .custom-metric-input input": "snapBackScroll"
    },
    menuOptions: {
        items: [{
                type: "HOST",
                value: "HOST_DOWN"
            }, {
                type: "HOST",
                value: "HOST_RECOVERING"
            }, {
                type: "HOST",
                value: "VERSION_BEHIND"
            }, {
                type: "AGENT",
                value: "MONITORING_AGENT_DOWN"
            }, {
                type: "AGENT",
                value: "BACKUP_AGENT_DOWN",
                requiresBackup: !0
            }, {
                type: "BACKUP",
                value: "OPLOG_BEHIND"
            }, {
                type: "BACKUP",
                value: "RESYNC_REQUIRED"
            }]
    },
    onRender: function (a) {
        this.$(".dropdown").bootstrap_dropdown_select();
        this.$(".scroll-pane").on("scroll", _.bind(_.debounce(this.handleScrolling, 10), this))
    },
    close: function () {
        this.$(".scroll-pane").off("scroll");
        this.remove()
    },
    getMetricMenuItems: function () {
        var a = this,
            b = this.model.getCurrentHostType(),
            e = this.options.metrics;
        "ANY" !== b && (e = _.filter(e, function (a) {
            return -1 !== _.indexOf(a.supportedHostTypes, parseInt(b, 10))
        }));
        return _.map(e, function (b) {
            var d = "RAW";
            "TIME" === b.units ? d = "MILLISECONDS" : "DATA" === b.units && (d = "BYTES");
            return {
                type: "HOST_METRIC",
                value: "OUTSIDE_METRIC_THRESHOLD",
                op: "GREATER_THAN",
                mode: "AVERAGE",
                units: d,
                opName: MMS.i18n.Activity.MetricOperations.GREATER_THAN,
                modeName: MMS.i18n.Activity.MetricModes.AVERAGE,
                unitsName: MMS.i18n.Activity.MetricUnits[d],
                condition: b.condition,
                showUnitsDropdown: "RAW" !== d,
                operatorDropdown: a.createDropdownOptions(["GREATER_THAN", "LESS_THAN"], MMS.i18n.Activity.MetricOperations),
                modeDropdown: a.createDropdownOptions(["AVERAGE", "TOTAL"], MMS.i18n.Activity.MetricModes),
                unitsDropdown: a.getUnitsDropdownOptions(b.units),
                hasChildInput: !0
            }
        })
    },
    getUnitsDropdownOptions: function (a) {
        if ("TIME" === a) return this.createDropdownOptions(["MILLISECONDS", "SECONDS", "MINUTES", "HOURS", "DAYS"], MMS.i18n.Activity.MetricUnits);
        if ("DATA" === a) return this.createDropdownOptions("BYTES KILOBYTES MEGABYTES GIGABYTES TERABYTES PETABYTES BITS KILOBITS MEGABITS GIGABITS".split(" "), MMS.i18n.Activity.MetricUnits)
    },
    createDropdownOptions: function (a, b) {
        return _.map(a, function (a) {
            return {
                name: b[a],
                value: a
            }
        })
    },
    filterMenuItems: function (a) {
        var b = this,
            e = this.model.get("_t"),
            c = this.model.get("et"),
            d = this.model.getCurrentMetricField("metric");
        a = a.concat(this.getMetricMenuItems());
        a = _.filter(a, function (a) {
            return "HOST" === b.model.getNormalizedType() ?
                "HOST" === a.type || "HOST_METRIC" === a.type : e === a.type
        });
        return a = _.map(a, function (a) {
            "OUTSIDE_METRIC_THRESHOLD" === a.value ? (a.active = d === a.condition, a.name = MMS.i18n.Activity.MetricNames[a.condition] + " is...", a.active && (a.threshold = b.model.getCurrentMetricField("threshold"), a.mode = b.model.getCurrentMetricField("mode"), a.units = b.model.getCurrentMetricField("units"), a.op = b.model.getCurrentMetricField("op"), a.modeName = MMS.i18n.Activity.MetricModes[b.model.getCurrentMetricField("mode")], a.unitsName = MMS.i18n.Activity.MetricUnits[b.model.getCurrentMetricField("units")],
                a.opName = MMS.i18n.Activity.MetricOperations[b.model.getCurrentMetricField("op")])) : (a.active = c === a.value, a.name = MMS.i18n.Activity.EventTypeOptionStrings[a.value]);
            return a
        })
    },
    showErrors: function () {
        var a = this.model.validationError,
            b = this.$el.find("li.active .custom-metric-input input");
        b.removeClass("validation-error");
        a && a.mt && b.addClass("validation-error")
    },
    updateSelection: function (a) {
        a.preventDefault();
        a = $(a.target).closest("a");
        var b = a.data("type"),
            e = a.data("value"),
            c = a.data("condition");
        this.setLinkTargetActive(a);
        this.showCustomMetricInput();
        this.model.setCurrentType(b);
        this.model.set("et", e);
        this.model.setCurrentMetric(c)
    },
    updateValue: function (a) {
        var b = $(a.target);
        a = b.val();
        var e = this.model.get("mt"),
            c = b.prev(".dropdown").data("dropdown"),
            b = b.next(".dropdown").data("dropdown");
        e.set("threshold", parseInt(a, 10));
        e.set("op", c.getValue());
        "mode" === b.getName() ? (e.set("mode", b.getValue()), e.set("units", "RAW")) : (e.set("mode", "AVERAGE"), e.set("units", b.getValue()))
    },
    dropdownSelection: function (a, b, e) {
        a = b.getName();
        b = this.model.get("mt");
        "operator" === a ? b.set("op", e) : "units" === a ? b.set("units", e) : "mode" === a && b.set("mode", e);
        this.snapBackScroll()
    },
    showCustomMetricInput: function () {
        this.$(".custom-metric-input").hide();
        var a = this.$el.find("li.active"),
            b = a.position();
        b && a.find(".custom-metric-input").css("top", b.top - 1).show()
    },
    handleScrolling: function (a) {
        function b(a, b) {
            var c;
            return 0 > a.top ? (c = Math.abs(a.top), 1 - c / 100) : a.top > b ? (c = a.top - b, 1 - c / 100) : 1
        }
        var e = this.$el.find(".scroll-pane"),
            c = this.$el.find("li.active");
        a =
            c.find(".custom-metric-input");
        var d = c.position(),
            e = e.height() - c.height() - 1;
        1 === a.length && (a.css("top", (0 > d.top ? -1 : d.top > e ? e - 1 : d.top - 1) + "px"), a.css("opacity", Math.max(b(d, e), 0.3)))
    }
});
MMS.Views.EventItemView = Backbone.Marionette.ItemView.extend({
    tagName: "li",
    className: "event clearfix",
    getTemplate: function () {
        return this.model.get("mt") ? Handlebars.templates["activity/event/metric_event.hbs"] : "HOST_AUDIT" === this.model.get("_t") ? Handlebars.templates["activity/event/host_audit.hbs"] : "BACKUP_AUDIT" === this.model.get("_t") ? Handlebars.templates["activity/event/backup_audit.hbs"] : Handlebars.templates["activity/event/event.hbs"]
    },
    templateHelpers: function () {
        return (new MMS.Decorators.Event(this.model)).decorate()
    }
});
MMS.Views.EventEmptyView = Backbone.View.extend({
    tagName: "div",
    className: "well text-center",
    render: function () {
        this.$el.html("<em>No events have been triggered</em>");
        return this
    }
});
MMS.Views.EventCollectionView = Backbone.Marionette.CollectionView.extend({
    itemView: MMS.Views.EventItemView,
    emptyView: MMS.Views.EventEmptyView,
    tagName: "ul",
    className: "list-unstyled activity-feed jshide",
    collectionEvents: {
        sync: "onSync"
    },
    onSync: function (a) {
        a instanceof Backbone.Collection && (this.render(), this.$el.show())
    }
});
_.extend(MMS.Views.EventCollectionView.prototype, MMS.Views.InfiniteScrollMixin);
(function () {
    MMS.bindAccountEvents = function (a) {
        $(".hostsTableContainer").on("click", ".deleteUserButton", function (a) {
            a.preventDefault();
            var e = $(this);
            e.attr("disabled", !0);
            a = {
                username: e.val()
            };
            $.ajax({
                url: "/user/removeUserFromGroup/" + MMS.Globals.GROUP_ID,
                type: "POST",
                data: $.param(a),
                dataType: "json",
                success: function (a) {
                    "OK" == a.status ? window.location.reload(!0) : e.attr("disabled", !1)
                },
                error: function (a, b, f) {
                    e.attr("disabled", !1)
                }
            })
        });
        $(".hostsTableContainer").on("click", ".editUserButton", function (b) {
            b.preventDefault();
            b = $(b.currentTarget);
            var e = b.val();
            b = new MMS.Views.EditUserDialog({
                model: {
                    username: e,
                    role: b.data("role"),
                    requireMultiAuth: a
                },
                config: {
                    steps: [{
                            id: "editUser",
                            next_button: "Save",
                            next_step: "authenticate",
                            prev_step: null,
                            viewClass: MMS.Views.EditUserDialogEditStep
                        }, {
                            id: "authenticate",
                            title: "Authenticate",
                            next_button: "Finalize Request",
                            next_step: null,
                            prev_step: "editUser",
                            viewClass: MMS.Views.EditUserDialogAuthStep
                        }]
                }
            });
            b.render();
            b.show()
        });
        $("#inviteUser").click(function (a) {
            a.preventDefault();
            $("#username").val("");
            $("#addUserForm").show();
            $("#inviteUserForm").hide();
            $("#inviteUserContainer").modal({
                show: !0
            })
        });
        $(".hostsTableContainer").on("click", ".approveGroupJoinRequestButton", function (a) {
            a.preventDefault();
            a = $(a.currentTarget);
            $("#approveHeaderUsername").text(a.val());
            $("#username_for_approve").val(a.val());
            $("#approveGroupJoinRequestContainer").modal({
                show: !0
            })
        });
        $(".hostsTableContainer").on("click", ".deleteGroupJoinRequestButton", function (a) {
            a.preventDefault();
            var e = $(this);
            e.attr("disabled", !0);
            a = {
                username: e.val()
            };
            $.ajax({
                url: "/user/deleteGroupJoinRequest/" + MMS.Globals.GROUP_ID,
                type: "POST",
                data: $.param(a),
                dataType: "json",
                success: function (a) {
                    "OK" == a.status ? window.location.reload(!0) : e.attr("disabled", !1)
                },
                error: function (a, b, f) {
                    e.attr("disabled", !1)
                }
            })
        });
        $(".hostsTableContainer").on("click", ".deleteGroupInvitationButton", function (a) {
            a.preventDefault();
            var e = $(this);
            e.attr("disabled", !0);
            a = {
                username: e.val()
            };
            $.ajax({
                url: "/user/deleteGroupInvitation/" + MMS.Globals.GROUP_ID,
                type: "POST",
                data: $.param(a),
                dataType: "json",
                success: function (a) {
                    "OK" == a.status ? window.location.reload(!0) : e.attr("disabled", !1)
                },
                error: function (a, b, f) {
                    e.attr("disabled", !1)
                }
            })
        });
        $("#editGroupButton").click(function (a) {
            a.preventDefault();
            $("#changeGroupNameContainer").modal({
                show: !0
            })
        });
        $("#addUserForm").common_form({
            uiMapping: {
                username: "#username",
                role: "#role_for_add"
            },
            handler: function (a, e, c) {
                $.ajax({
                    url: "/user/addUser/" + MMS.Globals.GROUP_ID,
                    type: "POST",
                    data: $.param({
                        username: a.username,
                        role: a.role
                    }),
                    dataType: "json",
                    success: function (d) {
                        "OK" ==
                            d.status ? (c(), $("#inviteUserContainer").modal("hide"), window.location.reload()) : "SERVER_ERROR" == d.errorCode ? (e(MMS.i18n.templateServerErrorMsg), c()) : "CROWD_ID_DOES_NOT_MATCH" == d.errorCode ? (e(MMS.i18n.addUserCustomerIdErrorMsg), c()) : "INVALID_USERNAME" == d.errorCode ? (e(MMS.i18n.addUserInvalidUsernameErrorMsg), c()) : "INACTIVE_GROUP" == d.errorCode ? (e(MMS.i18n.addUserInactiveCustomerErrorMsg), c()) : "USERNAME_NOT_FOUND" == d.errorCode && ($("#addUserForm").hide(), $("#username_for_invite").val(a.username), $("#role_for_invite").val(a.role),
                            $("#inviteUserForm").show(), c())
                    },
                    error: function (a) {
                        e(MMS.i18n.httpErrorMsg(a.status));
                        c()
                    }
                });
                return !1
            }
        });
        $("#inviteUserForm").common_form({
            uiMapping: {
                username: "#username_for_invite",
                role: "#role_for_invite"
            },
            handler: function (a, e, c) {
                $.ajax({
                    url: "/user/inviteUser/" + MMS.Globals.GROUP_ID,
                    type: "POST",
                    data: $.param({
                        username: a.username,
                        role: a.role
                    }),
                    dataType: "json",
                    success: function (a) {
                        "OK" == a.status ? ($("#inviteUserContainer").modal("hide"), window.location.reload()) : ("INVALID_USERNAME" == a.errorCode ? e(MMS.i18n.addUserInvalidUsernameErrorMsg) :
                            "INVALID_EMAIL_ADDR" == a.errorCode ? e("Please specify a valid email address") : "DUPLICATE_USERNAME" == a.errorCode ? e(MMS.i18n.inviteUserDuplicateUsernameErrorMsg) : e(MMS.i18n.templateServerErrorMsg), c())
                    },
                    error: function (a) {
                        e(MMS.i18n.httpErrorMsg(a.status));
                        c()
                    }
                });
                return !1
            }
        });
        $("#approveGroupJoinRequestForm").common_form({
            uiMapping: {
                username: "#username_for_approve",
                role: "#role_for_approve"
            },
            handler: function (a, e, c) {
                $.ajax({
                    url: "/user/addUser/" + MMS.Globals.GROUP_ID,
                    type: "POST",
                    data: $.param({
                        username: a.username,
                        role: a.role
                    }),
                    dataType: "json",
                    success: function (a) {
                        "OK" == a.status ? (c(), $("#approveGroupJoinRequestContainer").modal("hide"), window.location.reload(!0)) : (e(MMS.i18n.templateServerErrorMsg), c())
                    },
                    error: function (a) {
                        e(MMS.i18n.httpErrorMsg(a.status));
                        c()
                    }
                });
                return !1
            }
        });
        $("#changeGroupNameForm").common_form({
            uiMapping: {
                newGroupName: "#newGroupName"
            },
            handler: function (a, e, c) {
                $.ajax({
                    url: "/user/changeGroupName/" + MMS.Globals.GROUP_ID,
                    type: "POST",
                    data: $.param({
                        newGroupName: a.newGroupName
                    }),
                    dataType: "json",
                    success: function (a) {
                        "OK" ==
                            a.status ? ($("#changeGroupNameContainer").modal("hide"), window.location.reload()) : "SERVER_ERROR" == a.errorCode ? (e(MMS.i18n.templateServerErrorMsg), c()) : "INVALID_GROUP_NAME" == a.errorCode ? (e("Invalid group name"), c()) : "DUPLICATE_GROUP_NAME" == a.errorCode && (e("Group name taken"), c())
                    },
                    error: function (a) {
                        e(MMS.i18n.httpErrorMsg(a.status));
                        c()
                    }
                });
                return !1
            }
        })
    }
})();
MMS.Views.EditUserDialog = MMS.Views.Dialog.extend({
    el: "#editUserDialog",
    errorMessages: {
        CANNOT_DELETE_LAST_ADMIN: "You cannot switch the last admin in the group to read-only mode.",
        SHOULD_NOT_DELETE_LAST_ADMIN: '<i class="icon-warning-sign"></i> <strong>CAUTION:</strong> This is the last admin user in this group. You should probably not set this user to read-only.'
    },
    initialize: function (a) {
        MMS.Views.Dialog.prototype.initialize.call(this, a);
        Backbone.on("userEdit:update", this.update, this);
        Backbone.on("userEdit:success",
            this.hide, this);
        Backbone.on("userEdit:lastAdmin", this.lastAdminWarning, this);
        Backbone.on("userEdit:error", this.error, this);
        Backbone.on("userEdit:info", this.info, this)
    },
    hide: function () {
        this.undelegateEvents();
        Backbone.off("userEdit:update");
        Backbone.off("userEdit:success");
        Backbone.off("userEdit:lastAdmin");
        Backbone.off("userEdit:error");
        Backbone.off("userEdit:info");
        this.$el.modal("hide");
        return this
    },
    update: function () {
        var a = this;
        showLoading();
        $.ajax({
            url: "/user/updateUserRole/" + MMS.Globals.GROUP_ID,
            type: "POST",
            data: $.param({
                username: this.model.username,
                role: this.model.newRole,
                authCode: this.model.authCode
            }),
            dataType: "json",
            success: function (b) {
                hideLoading();
                "OK" == b.status ? (a.hide(), window.location.reload()) : a.error(a.errorMessages[b.errorCode] || MMS.i18n.templateServerErrorMsg)
            },
            error: function (b) {
                hideLoading();
                a.error(MMS.i18n.httpErrorMsg(b.status))
            }
        })
    },
    lastAdminWarning: function () {
        this.error(this.errorMessages.SHOULD_NOT_DELETE_LAST_ADMIN)
    },
    _firstStep: function () {
        return "editUser"
    }
});
MMS.Views.EditUserDialogEditStep = Backbone.View.extend({
    events: {
        "change #role_for_edit": "roleChanged"
    },
    initialize: function (a) {
        $("#role_for_edit").val(this.model.role)
    },
    roleChanged: function (a) {
        this.model.newRole = $(a.currentTarget).val();
        "READ_ONLY" === this.model.newRole && 2 > MMS.Globals.GROUP_ADMIN_COUNT && Backbone.trigger("userEdit:lastAdmin")
    },
    titleText: function () {
        return "Edit User: " + this.model.username
    },
    proceed: function (a) {
        void 0 === this.model.newRole || this.model.newRole === this.model.role ? Backbone.trigger("userEdit:success") :
            "READ_ONLY" === this.model.newRole || !this.model.requireMultiAuth ? Backbone.trigger("userEdit:update") : a.success();
        return this
    },
    render: function () {}
});
MMS.Views.EditUserDialogAuthStep = MMS.Views.Dialog.extend({
    events: {
        "click button.sendAuthCode": "sendAuthCode"
    },
    initialize: function (a) {},
    validate: function () {
        this.model.authCode = this.$(".authCode").val();
        return this.model.authCode && this.model.authCode.match(/^\d{6}$/) ? !0 : "Invalid auth code provided (expecting 6 digits)."
    },
    proceed: function (a) {
        Backbone.trigger("userEdit:update");
        return this
    },
    sendAuthCode: function () {
        showLoading();
        $.ajax({
            url: "/user/" + MMS.Globals.GROUP_ID + "/twoFactorAuthenticate",
            type: "POST",
            dataType: "json",
            success: function (a) {
                hideLoading();
                a.error ? Backbone.trigger("userEdit:error", a.error) : a.ok && Backbone.trigger("userEdit:info", "Auth code has been sent to your mobile phone.")
            }
        });
        return !1
    },
    render: function () {}
});
// # sourceMappingURL=application.js.map