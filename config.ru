require 'rack/jekyll'

if ENV['RACK_ENV'] === 'staging'
  use Rack::Auth::Basic, "Restricted Area" do |username, password|
    [username, password] == ['planetargon', 'makeithappen']
  end
end

run Rack::Jekyll.new
