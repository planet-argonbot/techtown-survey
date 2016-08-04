require 'rack/jekyll'

if ENV['RACK_ENV'] === 'staging'
  use Rack::Auth::Basic, "Restricted Area" do |username, password|
    [username, password] == ['techtown', 'diversitysurvey!']
  end
end

run Rack::Jekyll.new
